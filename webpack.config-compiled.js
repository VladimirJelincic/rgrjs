"use strict";

/**
 * Created by vladimir on 01/03/16.
 */
module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    //loaders
    module: {
        loaders: [{
            test: /\.js$/, loader: 'babel-loader',
            query: { presets: ['react', 'es2015'] }
        }]
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map