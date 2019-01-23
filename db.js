const mysql = require('mysql');

const config = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'dekcandoi1',
	database: 'mydb'
});

config.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Database connected!');
})
module.exports = config;