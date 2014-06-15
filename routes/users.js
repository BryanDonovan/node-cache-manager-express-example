var express = require('express');
var moment = require('moment');
var router = express.Router();
var cacheManager = require('cache-manager');
var memoryCache = cacheManager.caching({store: 'memory', max: 100, ttl: 10/*seconds*/});
var User = require('../lib/models/user');

function responder(res) {
    return function respond(err, data) {
        var startTime = moment(res.req._startTime);
        var diff = moment().diff(startTime, 'ms');

        if (err) {
            err.status = 500;
            res.render('error', {error: err});
        } else {
            data.requestTime = diff;
            res.render('users/show', data);
        }
    };
}

/**
 * Wraps User.get() with memoryCache.wrap().
 * First call to this function will call User.get and
 * cache the result. Subsequent requests, until the cache TTL
 * has expired, will return the user from cache.
 */
function fetchUser(id, cb) {
    var cacheKey = 'user_' + id;
    memoryCache.wrap(cacheKey, function (cacheCb) {
        console.log("Fetching user from slow database");
        User.get(id, cacheCb);
    }, cb);
}

router.get('/:id', function (req, res) {
    fetchUser(req.param('id'), responder(res));
});

module.exports = router;
