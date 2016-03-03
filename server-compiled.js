"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                     * Created by vladimir on 01/03/16.
                                     */


app.use(_express2.default.static('public'));
app.listen(3000);

//# sourceMappingURL=server-compiled.js.map