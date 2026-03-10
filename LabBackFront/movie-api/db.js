const { Pool } = require('pg');
const dotenv   = require('dotenv');
dotenv.config();

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexión a PostgreSQL establecida');
    client.release();
  } catch (error) {
    console.error('Error de conexión:', error.message);
  }
}

testConnection();
module.exports = pool;