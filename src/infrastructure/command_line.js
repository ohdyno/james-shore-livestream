'use strict';

exports.writeOutput = function (text) {
    console.log(text);
};

exports.args = function () {
    return process.argv.slice(2);
};