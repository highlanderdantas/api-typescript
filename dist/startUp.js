"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dbConfig_1 = require("./src/infra/dbConfig");
const middler_1 = require("./src/infra/middler");
const newsRouter_1 = require("./src/router/newsRouter");
class StartUp {
    constructor() {
        this.app = express();
        this._dbConfig = new dbConfig_1.default();
        this._dbConfig.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        middler_1.default.configure(this.app);
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        newsRouter_1.default.routes(this.app);
    }
}
exports.default = new StartUp();
