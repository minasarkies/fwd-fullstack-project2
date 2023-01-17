"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Client;
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, ENV = _a.ENV;
console.log(ENV);
if (ENV === "dev") {
    Client = new pg_1.Pool({
        user: POSTGRES_USER,
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD,
        port: 3000
    });
}
else if (ENV === "test") {
    Client = new pg_1.Pool({
        user: POSTGRES_USER,
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        password: POSTGRES_PASSWORD,
        port: 3000,
    });
}
exports.default = Client;
