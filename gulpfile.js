const { src, dest } = require("gulp");
const mocha = require("gulp-mocha");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function runTests(cb) {
  return src(["test_II.js"])
    .pipe(mocha())
    .on("error", function () {
      cb(new Error("Test failed"));
    })
    .on("end", function () {
      cb();
    });
}
exports.default = defaultTask;
exports.test = runTests;
