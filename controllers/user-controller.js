var mysql =require('mysql');
var date = require('date-and-time');
var config = require('../config/config.js');
var connection = mysql.createConnection(config.databaseOptions);


module.exports.index = function(req,res){
	var page = parseInt(req.query.page) || 1;
	var currentPage =[page];
	var pages =[page,page+1,page+2];
	var perPage =4;
	var start = (page -1)*perPage;
	var end = page*perPage;
	connection.query('call ShowUser()',
		function(err,result,fields){
			if (err) throw err;
			//result[0].DoB = date.format(result[0].DoB,'YYYY-MM-DD');
			for(var i in result[0]){
				result[0][i].DoB = date.format(result[0][i].DoB,'YYYY-MM-DD');
			}
			res.render('user/index', {users: result[0].splice(start,end), n: pages, current: currentPage});
	});
}