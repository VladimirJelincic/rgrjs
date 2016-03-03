"use strict";

/**
 * Created by vladimir on 01/03/16.
 */
var React = require("react");
var ReactDOM = require("react-dom");

var Helloo = React.createClass({
    render: function render() {
        return React.createElement("h3", null, "Hello from React and Webpack!");
    }
});
ReactDOM.render(React.createElement(Helloo), document.getElementById('react'));

//# sourceMappingURL=app-compiled.js.map