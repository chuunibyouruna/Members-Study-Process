const conn = require('../config');
var date = require('date-and-time');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const shortid = require("shortid");
const privateKey = 'Coders.Tokyo';
const jwt = require('jsonwebtoken');

module.exports.getScore = (req, res, next) => {
    let id = req.params.id;
    let sql = "SELECT User.idUser, User.FullName, Score.Score FROM User JOIN Score ON User.idUSer = Score.User_idUser";
    conn.query(sql, (err, data) => {
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
    conn.query(sql, (err, data) => {
        if (err) throw err;
        res.render('score.pug', {
            users: data
        });
        next();
    });
}

function getDefaultDate(now){
    console.log(`date ${now} ${typeof now}`)
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    return today;
}

module.exports.editProfile =async function (req,res) {
    const id = req.params.id;
    // const  sql = "SELECT * FROM User WHERE idUser = '"+id+"'";
    // CALL getUserProfile('05')
    const sql = "call getUserProfile('"+id+"')";
    await conn.query(sql,async function(err,users,field){
        console.log(users);
        let user = users[0][0];

        if(!err){
            user.DoB = getDefaultDate(user.DoB);
            user.DateJoin = getDefaultDate(user.DateJoin);
            res.render("users/edit-profile",{
                user: user
            })
        }
    });
    // res.render("users/edit-profile");
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
    console.log(req.body)
    const data = req.body;
    data.name = escapeHtml(data.name);
    data.school = escapeHtml(data.school);
    data.address = escapeHtml(data.address);
    // var sql = " UPDATE User SET FullName = '"+data.name+"', DoB = '"+data.birthday+"', School = '"+data.school+"', Address = '"+data.address+"' WHERE idUser = '"+data.id+"'" ;
    var sql = "CALL updateUser('"+data.name+"', '"+data.birthday+"','"+data.school+"', '"+data.address+"', '"+data.id+"')";
    conn.query(sql,function(err){
        if(err) throw err;
        res.redirect("/users/personal/edit-profile/"+data.id);
    });
    // res.redirect("/users/personal");
};
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
            // console.log(result[0]);
            for(var i in result[0]){
                result[0][i].DoB = date.format(result[0][i].DoB,'YYYY-MM-DD');
            }
            console.log(result);
            res.render('user/index', {
                users: result[0].splice(start,end),
                n: pages,
                current: currentPage
            });
        });
};


module.exports.index = (req,res)=>{
    var topUsers = "";
    sql = "CALL GetTopPoint(10)";
    conn.query(sql,(err,result)=>{
        if(err) console.error("Error");
        topUsers = result[0];
        res.render('personal-page/index',{
            topUser: topUsers
        });
    });

};



module.exports.register = (req,res) =>{
    res.render('../views/authorization/register.pug');
}

module.exports.postRegister = (req,res) =>{
    bcrypt.hash(req.body.password,saltRounds,function(err,hash){
        console.log(hash);
        let tempId = shortid.generate();
        let idUser = tempId.slice(0,6);

        if(err) throw console.error('Hash error');
        let sql = `call userRegister("${idUser}","${req.body.full_name}","${req.body.dob}",
            "${req.body.school}","${req.body.address}","${req.body.avatar}",
            "${req.body.phone_number}");
        `
        conn.query(sql,function(err,data){
            if(err) throw console.error('cannot push to table user , sth were happen');
            let sql2 = `call accountRegister("${idUser}","${req.body.user_name}","${hash}");`
            conn.query(sql2,function(err,data){
                if (err) throw console.error('cannot push to table account , sth were happen');
            })
        })

    })
};
module.exports.stateExercise = (req,res) => {
    jwt.verify(req.token, privateKey, (err,user) =>{
        if(err){
            res.sendStatus(403);
        }else{
            const idCourse = req.params.course;
            const idLession = req.query.lession;
            const idUser = '01';//user.User_idUser;
            let sql = `call getState("${idUser}","${idCourse}",${idLession})`;
            conn.query(sql,(err,data)=>{
                if(err) throw err;
                res.json({state:data[0][0].State});
            });
        }
    });
    res.json({state:"N"});
};
module.exports.postExcercise = (req,res) => {
    const data = req.body;
    jwt.verify(req.token, privateKey, (err,user) =>{
        if(err){
            res.sendStatus(403);
        }else{
            const idCourse = req.params.course;
            const idLession = req.query.lession;
            const idUser = '01';
            const link = data.link;
            const sql = `call postLink("${idUser}","${idCourse}",${idLession},"${link}")`;
            conn.query(sql,(err)=>{
                if(err) throw err;
                res.json({state:'Y'});
            });
        }
    });
    res.json({state:'N'});
};
//use this middleware to take information of token
function verifyToken(req,res,next){
    //get auth header value
    const bearerHeader = req.header['authorization'];
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearer = bearerHeader.split(' ');
        //get token from array
        const bearerToken = bearer[1];
        //Set the token
        req.token = bearerToken;
        //Next middleware
        next();
    }
    else{
        //Forbidden
        res.sendStatus(403);
    }
}