require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.connect()
  .then(() => console.log('✅ Conexión a DB exitosa'))
  .catch(err => {
    console.error('❌ Error al conectar a DB:', err);
    process.exit(1);
  });

module.exports = pool;
