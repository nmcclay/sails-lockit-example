var Lockit = require('lockit');

var config = {
    db: 'http://127.0.0.1:5984/test',
    emailType : 'Stub',
    emailSettings : {
        service: 'none',
        auth: {
            user: 'none',
            pass: 'none'
        }
    }
};

module.exports.express = {
    customMiddleware: function (app) {
        var lockit = new Lockit(app, config);
    }
};