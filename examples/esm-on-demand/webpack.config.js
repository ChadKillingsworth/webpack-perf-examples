"use strict";

const baseConfig = require("../../lib/base.config");

function config(env) {
    return baseConfig(Object.assign({}, env, {
        cwd: __dirname
    }));
}

module.exports = config;
