const conn = require('../config');
module.exports.stateExercise = (req,res)=>{
    const idUser = req.signedCookies.userId | '';
    const idCourse = req.params.id;
    const sql = " SELECT * FROM CodeDetail WHERE ( UserRecord_Course_idCourse = " + idCourse + " AND UserRecord_User_idUser = "+idUser+")";
    conn.query(sql,(err,data)=>{
        res.json(data);
    });
};
module.exports.submitExercise = (req,res) =>{
    const idUser = req.signedCookies.userId || '';
    const linkExcercise = req.body.link;
    const idCource = req.body.idCource;
    const sql = "UPDATE CodeDetail SET LinkContent = '"+linkExcercise+"' WHERE (serRecord_Course_idCourse = " + idCource + " AND UserRecord_User_idUser = "+idUser+")";
    conn.query(sql,(err)=>{
        if(err) throw err;
    });
    res.redirect('/');
};