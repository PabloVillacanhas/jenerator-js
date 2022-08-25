var gulp = require("gulp")
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function build(cb) {
	return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

exports.build = build
