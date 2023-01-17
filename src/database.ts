
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
let Client;
const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENV,
} = process.env;

console.log(ENV);
if(ENV === "dev"){
    Client = new Pool({
        user: POSTGRES_USER,
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        password: POSTGRES_PASSWORD,
        port: 3000
    });
} else if(ENV === "test"){
    Client = new Pool({
      user: POSTGRES_USER,
      host: POSTGRES_HOST,
      database: POSTGRES_TEST_DB,
      password: POSTGRES_PASSWORD,
      port: 3000,
    });  
}
 
export default Client;
