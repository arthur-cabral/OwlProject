var mysql = require('mysql2')
require('dotenv').config()

var connMySQL = function () {
  console.log("Conexão com o banco estabelecida!")
  return connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  })
}

module.exports = function () {
  console.log("O autoload carregou o modulo de conexão")
  return connMySQL
}