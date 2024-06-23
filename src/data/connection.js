import mysql2 from "mysql2/promise";
import "dotenv/config";

export const connection = await mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).then(res => console.log('connective sucessful',res))
.catch(err => console.log('connective failed',err.code));
export const testConnection = async () => {
  try {
    await connection.connect();
    console.log('Connection estabelish sucessful to database')
  } catch (error) {
    throw new Error('Not possible estabelish conection with database because',error) 
  }
};
