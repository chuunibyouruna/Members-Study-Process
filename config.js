var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"mydb"
});

module.exports = con;