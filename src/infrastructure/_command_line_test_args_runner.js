'use strict';

const CommandLine = require('./command_line');

const args = CommandLine.create().args();

process.stdout.write(JSON.stringify(args));