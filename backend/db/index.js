import postgre from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = postgre;

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
    max: 5,
  });
