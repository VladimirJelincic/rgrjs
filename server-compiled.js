'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by vladimir on 01/03/16.
 */

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

var db = undefined;
_mongodb.MongoClient.connect(process.env.MONGO_URL, function (err, database) {
    if (err) throw err;
    db = database;

    app.listen(3000, function () {
        return console.log('Listening on port 3000');
    });
});

app.get("/data/links", function (req, res) {
    db.collection("links").find({}).toArray(function (err, links) {
        if (err) throw err;
        res.json(links);
    });
});

//# sourceMappingURL=server-compiled.js.map