const { src, dest, watch } = require('gulp'); // Load gulp
const sass = require('gulp-sass')(require('sass')); // Load gulp-sass

function css(done){
    src('src/scss/**/*.scss') // Identify all the SASS files
        .pipe( sass() ) // Compile SASS to CSS
        .pipe( dest('build/css') ); // Save CSS
    done(); // Finish task
}

function dev(done){
    watch('src/scss/**/*.scss', css); // Watch changes in SASS files
    done(); // Finish task
}

exports.css = css; // Export task
exports.dev = dev; // Export task