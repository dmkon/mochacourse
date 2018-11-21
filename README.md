npm init
npm install express 
npm install -g nodemon
npm install -g mocha
npm install chai mocha --save-dev

mocha init browser
npm install -g browserify
browserify test/hex2rgb.test.js -o browser/tests.js
open browser/index.html


Lesson 15 (https://ci.testling.com)
npm install -g testling
testling
testling -u

Lesson 16 (https://travis-ci.org)

lesson 17 
npm install sinon --save-dev