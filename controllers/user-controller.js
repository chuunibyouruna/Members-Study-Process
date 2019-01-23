const db = require("../db");
const shortid = require("shortid");

function getDefaultDate(now){

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    return today;
}
module.exports.index = function(req,res){
    const  sql = "SELECT * FROM User";
    db.query(sql,function(err,users){
        if(!err)
            res.render("users/index",{
                users: users
            })
    });
};
module.exports.editProfile = function (req,res) {
    const id = req.params.id;
    const  sql = "SELECT * FROM User WHERE idUser = '"+id+"'";
    db.query(sql,function(err,users){
        if(!err)
            var x = getDefaultDate(users[0].DoB);
            users[0].DoB = x;
            console.log(x);
            res.render("users/edit-profile",{
                user: users[0]
            })
    });
    res.render("users/edit-profile");
};
module.exports.postEditProfile = function(req,res){
    const data = req.body;
    console.log(data.birthday);
    var sql = " UPDATE User SET FullName = '"+data.name+"', DoB = '"+data.birthday+"', School = '"+data.school+"', Address = '"+data.address+"' WHERE idUser = '"+data.id+"'" ;
    db.query(sql,function(err){
        if(err) throw err;
        console.log('success');
        res.redirect("/users");
    });
};