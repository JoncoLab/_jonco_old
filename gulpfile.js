'use strict';

const gulp = require("gulp"),
    autoPrefix = require("gulp-autoprefixer"),
    cssComb = require("gulp-csscomb"),
    image = require("gulp-image"),
    compileSass = require("gulp-sass"),
    rigger = require("gulp-rigger"),
    rimraf = require("rimraf"),
    zip = require("gulp-zip"),
    path = {
        src: {
            html: {
                en: [
                    'src/*.html',
                    'src/*.ico'
                ],
                ru: 'src/ru/*.html',
            },
            css: 'src/styles/style.scss',
            img: 'src/images/*.png',
            svg: 'src/svg/*.svg',
            fonts: 'src/fonts/*.ttf',
            js: 'src/scripts/*.js',
            zip: [
                'build/*',
                'build/**/*',
                'build/**/**/*'
            ],
            video: 'src/video/*'
        },

        build: {
            html: {
                en: 'build/',
                ru: 'build/ru/'
            },
            css: 'build/styles/',
            img: 'build/images/',
            svg: 'build/svg/',
            fonts: 'build/fonts/',
            js: 'build/scripts/',
            zip: 'zip/',
            video: 'build/video/'
        },

        watch: {
            pages: [
                'src/*.html',
                'src/*.ico',
                'src/ru/*.html',
                'src/fonts/*.ttf'
            ],
            scripts: 'src/scripts/*.js',
            styles: 'src/styles/*.scss',
            images: 'src/images/*.png',
            video: 'src/video/*',
            svg: 'src/svg/*.svg'
        },

        clean: 'build*'
    };

//Збірка html
gulp.task('html:build', function () {
    gulp.src(path.src.html.en)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html.en));
    gulp.src(path.src.html.ru)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html.ru));
});

//Збірка JS
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js));
});

//Збірка СSS
gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(cssComb())
        .pipe(autoPrefix({
            browsers: ['last 40 versions', '> 90%'],
            remove: true
        }))
        .pipe(gulp.dest(path.build.css));
});

//Збірка картинок
gulp.task('img:build', function () {
    gulp.src(path.src.img)
        .pipe(image())
        .pipe(gulp.dest(path.build.img));
});

gulp.task('svg:build', function () {
    gulp.src(path.src.svg)
        .pipe(gulp.dest(path.build.svg));
});

//Збірка відео
gulp.task('video:build', function () {
    gulp.src(path.src.video)
        .pipe(gulp.dest(path.build.video));
});

//Збірка шрифтів
gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

//Збірка сайту в архів для хостингу
gulp.task('zip:build', function () {
    gulp.src(path.src.zip)
        .pipe(zip('build.zip'))
        .pipe(gulp.dest(path.build.zip));
});

//Загальна збірка
gulp.task('project:build', [
    'html:build',
    'js:build',
    'css:build',
    'img:build',
    'svg:build',
    'fonts:build',
    'video:build',
    'zip:build'
]);

gulp.task('watch', function () {
    gulp.watch(path.watch.pages, [
        'html:build',
        'fonts:build'
    ]);
    gulp.watch(path.watch.styles, ['css:build']);
    gulp.watch(path.watch.scripts, ['js:build']);
    gulp.watch(path.watch.images, ['img:build']);
    gulp.watch(path.watch.svg, ['svg:build']);
    gulp.watch(path.watch.video, ['video:build']);
});

//Очистка
gulp.task('clean', function (callback) {
    rimraf(path.clean, callback);
});

//Запуск роботи з проектом
gulp.task('default', ['project:build', 'watch']);