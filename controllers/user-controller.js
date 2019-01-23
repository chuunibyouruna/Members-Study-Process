const conn = require('../config');
var date = require('date-and-time');
const shortid = require("shortid");

function getDefaultDate(now){

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    return today;
}
// module.exports.index = function(req,res){
//     const  sql = "SELECT * FROM User";
//     conn.query(sql,function(err,users){
//         if(!err)
//             res.render("users/index",{
//                 users: users
//             })
//     });
// };
module.exports.editProfile = function (req,res) {
    const id = req.params.id;
    const  sql = "SELECT * FROM User WHERE idUser = '"+id+"'";
    conn.query(sql,function(err,users){
        if(!err)
            users[0].DoB = getDefaultDate(users[0].DoB);
            users[0].DateJoin = getDefaultDate(users[0].DateJoin);
            res.render("users/edit-profile",{
                user: users[0]
            })
    });
    res.render("users/edit-profile");
};
function escapeHtml(unsafe) {
    return unsafe
        .trim()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\\(.)/mg, "$1");
}
module.exports.postEditProfile = function(req,res){
    const data = req.body;
    data.name = escapeHtml(data.name);
    data.school = escapeHtml(data.school);
    data.address = escapeHtml(data.address);
    var sql = " UPDATE User SET FullName = '"+data.name+"', DoB = '"+data.birthday+"', School = '"+data.school+"', Address = '"+data.address+"' WHERE idUser = '"+data.id+"'" ;
    conn.query(sql,function(err){
        if(err) throw err;
        res.redirect("/users/edit-profile/"+data.id);


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