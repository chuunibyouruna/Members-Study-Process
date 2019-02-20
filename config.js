var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'chithien123',
    database: 'mydb'
});

module.exports = con;