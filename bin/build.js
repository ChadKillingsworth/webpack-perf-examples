const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const pathToExamples = path.resolve(__dirname, "..", "examples");

const examples = fs.readdirSync(pathToExamples)
  .filter(example => example.indexOf('-on-demand') < 0);
let webpackConfigs = examples.map(example => path.join(pathToExamples, example, "webpack.config.js"));
const configCases = [
    "regular",
    "minified"
];

webpackConfigs = webpackConfigs.filter(filepath => filepath.indexOf('/-on-demand/') < 0);

configCases.forEach(configCase => {
    examples.forEach((example, i) => {
        console.log(`Compiling ${ example } with config case ${ configCase }`);

        const config = require(webpackConfigs[i])({
            configCase
        });

        webpack(config, err => {
            if (err) {
                throw err;
            }
        });
    });
});
