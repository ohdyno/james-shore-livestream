'use strict';

const assert = require('../assert');
const childProcess = require('child_process');
const path = require('path');

function runModule(relativeModulePath, args) {
    return new Promise(((resolve, reject) => {
        const absolutePath = path.resolve(__dirname, relativeModulePath);

        const options = {
            stdio: "pipe",
        };

        const child = childProcess.fork(absolutePath, args, options);

        let stdout = "";
        let stderr = "";
        child.stdout.on("data", (data) => {
            stdout += data;
        });
        child.stderr.on("data", (data) => {
            stderr += data;
        });

        child.on("exit", () => {
            if (stderr !== "") return reject(stderr);
            return resolve(stdout);
        });
    }));
}

describe('command line', function () {
    it('returns arguments', async function () {
        const args = ["arg1", "arg2"];
        const stdout = await runModule("./_command_line_test_args_runner.js", args);
        assert.equal(stdout, '["arg1","arg2"]');
    });

    it('writes output', async function () {
        const stdout = await runModule("./_command_line_test_output_runner.js");
        assert.equal(stdout, "my output\n");
    });
});