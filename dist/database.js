"use strict";
// // import dotenv from "dotenv";
// // import { Pool } from "pg";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // dotenv.config();
// // const {
// //   POSTGRES_HOST,
// //   POSTGRES_DB,
// //   POSTGRES_TEST_DB,
// //   POSTGRES_USER,
// //   POSTGRES_PASSWORD,
// //   PORT,
// //   ENV,
// // } = process.env;
// import { Client } from "pg";
// import dotenv from "dotenv";
// dotenv.config();
// const client = new Client({
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DB,
//   password: process.env.POSTGRES_PASSWORD,
//   port: 3000,
// });
// //let client: Pool;
// // client = new Pool({
// //   host: POSTGRES_HOST,
// //   database: ENV === "dev" ? POSTGRES_DB : POSTGRES_TEST_DB,
// //   user: POSTGRES_USER,
// //   password: POSTGRES_PASSWORD,
// // });
// export default client;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const Client = async () => {
//   try {
var Client = new pg_1.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 3000,
});
// await pool.connect();
// const res = await pool.query("SELECT * FROM clients");
// console.log(res);
// await pool.end();
//   } catch (error) {
//     console.log(error);
//   }
// };
//Client();
exports.default = Client;
