'use strict';

const commandLine = require('./command_line');

const args = commandLine.args();

process.stdout.write(JSON.stringify(args));