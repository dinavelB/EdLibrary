import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dB020606",
  database: "my_first-Db",
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export default pool;
