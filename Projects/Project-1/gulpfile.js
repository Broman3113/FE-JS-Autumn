"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

const dist = "./dist";
const prod = "./build/";

gulp.task("copy-html", () => {
    return gulp.src("./src/**.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
    return gulp.src("./src/sass/style.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(dist + '/css'))
                .pipe(browsersync.stream());
});
gulp.task("build-sass-pages", () => {
    return gulp.src("./src/sass/pages/**.scss")
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(dist + '/css/pages'))
                .pipe(browsersync.stream());
});


gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
        .pipe(gulp.dest(dist + "/assets"))
        .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });

    gulp.watch("./src/**.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/sass/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/sass/pages/**/*.scss", gulp.parallel("build-sass-pages"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-sass", "build-sass-pages"));

gulp.task("prod", () => {
    gulp.src("./src/**.html")
        .pipe(gulp.dest(prod));
    gulp.src("./src/assets/**/*.*")
        .pipe(gulp.dest(prod + "/assets"));

    gulp.src("./src/sass/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(prod + '/css'));

    return gulp.src("./src/sass/pages/**.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(prod + '/css/pages'));
});

gulp.task("default", gulp.parallel("watch", "build"));
