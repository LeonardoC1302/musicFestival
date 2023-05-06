# Guide on NPM, SASS and GULP
### SASS
- npm install sass --save-dev ---> Install as development dependecy
- npm i ---> installs all dependencies
- "sass": "sass src/scss:build/css" --> reads the first file and saves the compiled version on the second one
- "sass": "sass --watch src/scss:build/css" --> keeps checking for changes on the sass file and compiles it when needed
- npm run \<name> ---> used to run an script
- Use '_' at the start of a file name to indicate that is not the main sass file

### GULP
- npm i --D gulp --> install gulp as a development dependency
- npx gulp \<name> --> execute a gulp function or task
- If a script is made, npm run \<name> can be used to execute the gulp task

### Images
- npm i --D gulp-webp
- npm i --D gulp-imagemin@7.1.0
- npm i --D gulp-cache 
- npm i --D gulp-avif

### Performance
- npm i --D cssnano autoprefixer postcss gulp-postcss
- npm i --D gulp-sourcemaps
- npm i --D gulp-terser-js