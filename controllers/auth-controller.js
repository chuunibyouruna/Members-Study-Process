const conn = require('../config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey = 'Coders.Tokyo';


module.exports.login = (req,res) =>{
    res.send('write get login here');
}

module.exports.postLogin = (req,res) =>{
    var account = {};
    if(req.body.user_name){
        const sql = `Call GetAccount('${req.body.user_name}')`
        conn.query(sql,function(err,data){
            if(err) throw console.error('error db');
            account = data[0][0];
            console.log(account.password);
            // Load hash from your password DB.
            bcrypt.compare(req.body.password, account.password, function(err, check) {
                if(check){
                    console.log('login complete');
                    jwt.sign({account},privateKey,(err,token)=>{
                        console.log('this is token',token);
                        res.json({token});
                    })
                    
                }
                else{
                    console.log('wrong password');
                }
            });
        }) 
    }
    else{
        console.log('user name donot exist');
    }
}

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