function User(args) {
    this.id = args.id;
    this.name = args.name;
}

User.get = function (id, cb) {
    setTimeout(function () { // simulated I/O
        cb(null, new User({id: id, name: 'bob'}));
    }, 100);
};

module.exports = User;
