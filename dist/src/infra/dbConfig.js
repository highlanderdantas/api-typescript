"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DbConfig {
    constructor() {
        this.DB_URL = "mongodb://localhost:27017/db_portal";
        this.options = { useNewUrlParser: true, useUnifiedTopology: true };
    }
    createConnection() {
        mongoose.connect(this.DB_URL, this.options);
    }
}
exports.default = DbConfig;
