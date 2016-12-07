# webpack-perf-examples

Simple examples of webpack bundles that can be used for performance tests

## Folders

The `examples` folder contains typical webpack projects stripped down to the most essential parts. webpack itself supports three different module formats:

- CommonJS
- AMD
- ES modules

### On demand

webpack also supports on demand loading which creates a separate bundle (which is called chunk) that contains all the additional modules.
In CommonJS you create a split point by calling [`require.ensure`](http://wiki.commonjs.org/wiki/Modules/Async/A), in ES modules by calling `System.import()`
(which will soon be changed to the new [dynamic `import()` syntax](https://github.com/tc39/proposal-dynamic-import)). 

### Minification

webpack does not minify the code by default. However, you can apply an UglifyJsPlugin() which compresses all resulting chunks.

## Usage

Run `npm build` to re-generate the bundles.
