require.ensure(["./b.js", "./c.js"], function (require) {
    const b = require("./b.js");
    const c = require("./c.js");

    console.log(b, c.exportA, c.exportB);
});
