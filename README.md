# About

This repository was created to showcase a bug that seems to exist in the `karma-browserify` plugin.
If you have declared a `browserify` transform twice, once in a `package.json` and in the `karma.conf.js` as well, it gets applied twice.

# How to verify

1. Clone repo
2. `npm install`
3. `npm test`

The test fails. If you remove the `hbsfy` transform either in the `package.json` or in the `karma.conf.js` the test will pass.
