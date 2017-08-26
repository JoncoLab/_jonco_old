'use strict';

var gulp = require("gulp"),
    autoPrefix = require("gulp-autoprefixer"),
    cssComb = require("gulp-csscomb"),
    image = require("gulp-image"),
    compileSass = require("gulp-sass"),
    rigger = require("gulp-rigger"),
    rimraf = require("rimraf"),
    jsMinify = require("gulp-minify"),
    zip = require("gulp-zip"),
    ftp = require("vinyl-ftp"),
    path = {
        src: {
            html: {
                en: [
                    'src/*.html',
                    'src/*.php',
                    'src/*.ico'
                ],
                ru: [
                    'src/ru/*.html',
                    'src/ru/*.php'
                ]
            },
            css: 'src/styles/style.scss',
            php: 'src/scripts/*.php',
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
            php: 'build/scripts/php/',
            img: 'build/images/',
            svg: 'build/svg/',
            fonts: 'build/fonts/',
            js: 'build/scripts/js/',
            zip: 'zip/',
            video: 'build/video/'
        },

        watch: {
            pages: [
                'src/*.html',
                'src/*.php',
                'src/*.ico',
                'src/ru/*.html',
                'src/ru/*.php',
                'src/fonts/*.ttf'
            ],
            scripts: [
                'src/scripts/*.php',
                'src/scripts/*.js'
            ],
            styles: 'src/styles/*.scss',
            images: 'src/images/*.png',
            video: 'src/video/*',
            svg: 'src/svg/*.svg'
        },

        ftp: {
            html: {
                en: '/',
                ru: '/ru/'
            },
            css: '/styles/',
            php: '/scripts/php/',
            img: '/images/',
            svg: '/svg/',
            fonts: '/fonts/',
            js: '/scripts/js/',
            video: '/video/'
        },

        clean: 'build*'
    },
    connectToFtp = ftp.create({
        host: 'joncolab.ftp.ukraine.com.ua',
        user: 'joncolab_ftp',
        pass: 'c9ZXk9B9l1',
        parallel: 20
    });

//Збірка html
gulp.task('html:build', function () {
    gulp.src(path.src.html.en)
        .pipe(rigger())
        .pipe(connectToFtp.dest(path.ftp.html.en))
        .pipe(gulp.dest(path.build.html.en));
    gulp.src(path.src.html.ru)
        .pipe(rigger())
        .pipe(connectToFtp.dest(path.ftp.html.ru))
        .pipe(gulp.dest(path.build.html.ru));
});

//Збірка php
gulp.task('php:build', function () {
    gulp.src(path.src.php)
        .pipe(rigger())
        .pipe(connectToFtp.newer(path.ftp.php))
        .pipe(connectToFtp.dest(path.ftp.php))
        .pipe(gulp.dest(path.build.php));
});

//Збірка JS
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(connectToFtp.newer(path.ftp.js))
        .pipe(jsMinify({
            ext: {
                min: '.js'
            },
            noSource: '*.js'
        }))
        .pipe(connectToFtp.dest(path.ftp.js))
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
        .pipe(connectToFtp.newer(path.ftp.css))
        .pipe(connectToFtp.dest(path.ftp.css))
        .pipe(gulp.dest(path.build.css));
});

//Збірка картинок
gulp.task('img:build', function () {
    gulp.src(path.src.img)
        .pipe(connectToFtp.newer(path.ftp.img))
        .pipe(image())
        .pipe(connectToFtp.dest(path.ftp.img))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('svg:build', function () {
    gulp.src(path.src.svg)
        .pipe(connectToFtp.newer(path.ftp.svg))
        .pipe(connectToFtp.dest(path.ftp.svg))
        .pipe(gulp.dest(path.build.svg));
});

//Збірка відео
gulp.task('video:build', function () {
    gulp.src(path.src.video)
        .pipe(connectToFtp.newer(path.ftp.video))
        .pipe(connectToFtp.dest(path.ftp.video))
        .pipe(gulp.dest(path.build.video));
});

//Збірка шрифтів
gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(connectToFtp.newer(path.ftp.fonts))
        .pipe(connectToFtp.dest(path.ftp.fonts))
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
    'php:build',
    'fonts:build',
    'video:build'
]);

gulp.task('watch', function () {
    gulp.watch(path.watch.pages, [
        'html:build',
        'fonts:build'
    ]);
    gulp.watch(path.watch.styles, ['css:build']);
    gulp.watch(path.watch.scripts, [
        'js:build',
        'php:build'
    ]);
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