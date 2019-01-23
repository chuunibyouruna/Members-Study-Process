const conn = require('../config');

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
}