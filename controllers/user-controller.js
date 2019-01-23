const mydb = require('../db');

module.exports.getScore = (req, res, next) => {
	let id = req.params.id;
	let sql = "SELECT User.idUser, User.FullName, Score.Score FROM User JOIN Score ON User.idUSer = Score.User_idUser";
	mydb.query(sql, (err, data) => {
		if(err) throw err;
		data = data.filter((item) => item.idUser == id);
		res.render('score.pug', {
			users: data
		})
	});
}

module.exports.getScores =  (req, res, next) => {
	let users = [];
	let sql = "SELECT User.FullName, Score.Score FROM User JOIN Score ON User.idUSer = Score.User_idUser";
	mydb.query(sql, (err, data) => {
		if (err) throw err;
		res.render('score.pug', {
			users: data
		});
		next();
	});
}