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
    db.query(sql,function(err){
        if(err) throw err;
        res.redirect("/users/edit-profile/"+data.id);
    });
};