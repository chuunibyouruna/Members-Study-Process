const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'chithien123',
    database: 'mydb'
});
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});
module.exports = con;