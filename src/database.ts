// // import dotenv from "dotenv";
// // import { Pool } from "pg";

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
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// const Client = async () => {
//   try {
    const Client = new Pool({
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
export default Client;