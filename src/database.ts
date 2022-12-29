
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// const Client = async () => {
try {
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
   } catch (error) {
       console.log(error);
   }
// };

//Client();
export default Client;
