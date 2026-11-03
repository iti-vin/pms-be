import sql from "mssql";

const config = {
  server: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 1433),
  database: process.env.DB_DATABASE || "PMS",
  user: process.env.DB_USERNAME || "sa",
  password: process.env.DB_PASSWORD || "sql123$%^",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

try {
  const pool = await sql.connect(config);
  const result = await pool.request().query("SELECT @@SERVERNAME AS serverName, DB_NAME() AS databaseName");

  console.log(result.recordset);
  await pool.close();
} catch (error) {
  console.error("SQL connection failed:", error.message);
}
