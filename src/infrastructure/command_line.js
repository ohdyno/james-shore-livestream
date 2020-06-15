'use strict';

module.exports = class CommandLine {
    static create() {
        return new CommandLine();
    }

    writeOutput(text) {
        console.log(text);
    }

    args() {
        return process.argv.slice(2);
    }
};