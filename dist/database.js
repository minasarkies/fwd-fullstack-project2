"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const Client = async () => {
//try {
//    });
// await pool.connect();
// const res = await pool.query("SELECT * FROM clients");
// console.log(res);
// await pool.end();
//   } catch (error) {
//       console.log(error);
//   }
// };
//Client();
var Client = new pg_1.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 3000,
});
exports.default = Client;
