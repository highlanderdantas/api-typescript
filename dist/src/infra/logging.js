"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
const typescript_logging_1 = require("typescript-logging");
exports.factory = typescript_logging_1.LFService.createNamedLoggerFactory("LoggerFactory");
class Logging {
    constructor() {
    }
    build(name) {
        this._log = exports.factory.getLogger(name);
        return this;
    }
    info(message) {
        this._log.info(() => message);
    }
    error(message) {
        this._log.info(() => message);
    }
}
exports.default = new Logging();
