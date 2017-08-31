"use strict";

const path = require("path");
const webpack = require("webpack");
const ClosureCompilerPlugin = require('google-closure-compiler/lib/webpack/index');

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
            configCase === "minified" && new ClosureCompilerPlugin({
                process_common_js_modules: true,
                dependency_mode: "STRICT",
                assume_function_wrapper: true,
                // formatting: 'PRETTY_PRINT',
                // debug: true
            })
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
