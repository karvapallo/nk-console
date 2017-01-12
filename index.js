'use strict';

const fs = require('fs-extra');
const debug = process.debugPort;
const logFilePath = __dirname + '/../../../../node-log.txt';
const EOL = require('os').EOL;
const util = require('util');

fs.ensureFileSync(logFilePath);

class NkConsole {

	constructor() {
		if (!(this instanceof NkConsole)) {
			return new NkConsole();
		}
	}

	log(message) {
		if (debug) {
			console.log(message);
		} else {
			this.writeToLogFile(message);
		}
	}
	
	dir(message) {
		if (debug) {
			console.dir(message);
		} else {
			this.writeToLogFile(message);
		}
	}

	error(message) {
		if (debug) {
			console.error(message);
		} else {
			this.writeToLogFile(message);
		}
	}

	writeToLogFile() {
		fs.appendFileSync(logFilePath, util.format.apply(this, arguments) + EOL);
	}
}

module.exports = new NkConsole();
module.exports.NkConsole = NkConsole;
