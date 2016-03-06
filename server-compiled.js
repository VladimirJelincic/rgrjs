'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

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
    app.use('/graphql', (0, _expressGraphql2.default)({
        schema: (0, _schema2.default)(db),
        graphiql: true
    }));
    app.listen(3000, function () {
        return console.log('Listening on port 3000');
    });
});
/*
app.get("/data/links", (req, res) => {
    db.collection("links").find({}).toArray((err,links)=>{
        if(err) throw err;
        res.json(links);
  });
});
*/

//# sourceMappingURL=server-compiled.js.map