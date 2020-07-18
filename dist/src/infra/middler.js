"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class Middler {
    configure(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new Middler();
