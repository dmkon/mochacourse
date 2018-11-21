npm init
npm install express 
npm install -g nodemon
npm install -g mocha
npm install chai mocha --save-dev

mocha init browser
npm install -g browserify
browserify test/hex2rgb.test.js -o browser/tests.js
open browser/index.html


Lesson 15
npm install -g testling
testling
testling -u
