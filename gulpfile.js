const { src, dest, watch, parallel } = require('gulp'); // Load gulp

// CSS
const sass = require('gulp-sass')(require('sass')); // Load gulp-sass
const plumber = require('gulp-plumber'); // Load gulp-plumber
// IMAGES
const cache = require('gulp-cache'); // Load gulp-cache
const imagemin = require('gulp-imagemin'); // Load gulp-imagemin
const webp = require('gulp-webp'); // Load gulp-webp
const avif = require('gulp-avif'); // Load gulp-avif

function css(done){
    src('src/scss/**/*.scss') // Identify all the SASS files
        .pipe( plumber() ) // Prevent pipe breaking caused by errors from gulp plugins
        .pipe( sass() ) // Compile SASS to CSS
        .pipe( dest('build/css') ); // Save CSS
    done(); // Finish task
}

function images(done){
    const options = {
        optimizationLevel: 3 // Optimization level of the images
    }
    src('src/img/**/*.{png, jpg}') // Identify all the images
        .pipe( cache(imagemin(options)) ) // Optimize images
        .pipe( dest('build/img') ); // Save images
    done();
}

function webpVersion(done){
    const options = {
        quality: 50 // Quality of the images
    }
    src('src/img/**/*.{jpg,png}') // Identify all the images
        .pipe( webp(options) ) // Convert images to webp
        .pipe( dest('build/img') ); // Save webp images
    done();
}

function avifVersion(done){
    const options = {
        quality: 50 // Quality of the images
    }
    src('src/img/**/*.{jpg,png}') // Identify all the images
        .pipe( avif(options) ) // Convert images to avif
        .pipe( dest('build/img') ); // Save avif images
    done();
}

function javascript(done){
    src('src/js/**/*.js') // Identify all the JS files
        .pipe( dest('build/js') ); // Save JS
    done(); // Finish task  
}

function dev(done){
    watch('src/scss/**/*.scss', css); // Watch changes in SASS files
    watch('src/js/**/*.js', javascript); // Watch changes in JS files
    done(); // Finish task
}

exports.css = css; // Export task
exports.javascript = javascript; // Export task
exports.dev = parallel(images, webpVersion, avifVersion, javascript, dev); // Export task
exports.webpVersion = webpVersion; // Export task
exports.avifVersion = avifVersion; // Export task
exports.images = images; // Export task