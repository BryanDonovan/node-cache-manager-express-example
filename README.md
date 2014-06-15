node-cache-manager-express-example
==================================

## Example node-cache-manager Express App

This [Express](http://expressjs.com/) App demonstrates how to use
[node-cache-manager](https://github.com/BryanDonovan/node-cache-manager) in
your apps.

### Setup

    git clone git@github.com:BryanDonovan/node-cache-manager-express-example.git
    cd node-cache-manager-express-example
    npm install .
    npm start

Then browse to [localhost:3000/users/123](http://localhost:3000/users/123)

Refresh the page a few times to see how the request time changes.

See ``routes/users.js`` for the relevant code that demonstrates how to use the
``cache-manager`` npm in your Express app.
