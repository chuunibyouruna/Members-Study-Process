
const conn = require('../config');
var date = require('date-and-time');

module.exports.indexMembersPage = function(req,res){
	var page = parseInt(req.query.page) || 1;
	var currentPage =[page];
	var pages =[page,page+1,page+2];
	var perPage =4;
	var start = (page -1)*perPage;
	var end = page*perPage;
	conn.query('call ShowUser()',
		function(err,result,fields){
			if (err) throw err;
			//result[0].DoB = date.format(result[0].DoB,'YYYY-MM-DD');
			for(var i in result[0]){
				result[0][i].DoB = date.format(result[0][i].DoB,'YYYY-MM-DD');
			}
			res.render('user/index', {users: result[0].splice(start,end), n: pages, current: currentPage});
    });
};


module.exports.index = (req,res)=>{
    var topUsers,
        sql = "CALL GetTopPoint(10);";
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        topUsers = result;
    });
    res.render('../views/index',{
        topUsers: topUsers
    });
};