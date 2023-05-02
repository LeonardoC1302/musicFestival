# Guide on NPM, SASS and GULP
### SASS
- npm install sass --save-dev ---> Install as development dependecy
- npm i ---> installs all dependencies
- "sass": "sass src/scss:build/css" --> reads the first file and saves the compiled version on the second one
- "sass": "sass --watch src/scss:build/css" --> keeps checking for changes on the sass file and compiles it when needed
- npm run \<name> ---> used to run an script

### GULP
- npm i --D gulp --> install gulp as a development dependency
- npx gulp \<name> --> execute a gulp function or task