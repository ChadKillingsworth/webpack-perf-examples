"use strict";

const path = require("path");
const webpack = require("webpack");

function baseConfig({ cwd, configCase }) {
    if (!cwd || !configCase) {
        throw new Error("Some arguments for the base config are missing");
    }

    return {
        entry: require.resolve(path.join(cwd, "a.js")),
        output: {
            path: path.join(cwd, "bundle", configCase),
            filename: "bundle.js"
        },
        plugins: clean([
            configCase === "minified" && new webpack.optimize.UglifyJsPlugin()
        ])
    };
}

function clean(thing) {
    if (Array.isArray(thing)) {
        return thing.filter(v => Boolean(v));
    }
    return Object.keys(thing)
        .reduce((o, k) => thing[k] == null ? o : (o[k] = thing[k], o), {}); // eslint-disable-line
}

module.exports = baseConfig;
