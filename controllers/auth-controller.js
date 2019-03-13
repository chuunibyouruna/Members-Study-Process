const conn = require('../config');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const privateKey = 'Coders.Tokyo';
const shortid = require('shortid');

const AccountAuth = {
    email:"", //will update file .env in the next feature
    password: ""
}
const nodemailer = require('nodemailer');




module.exports.login = (req,res) =>{
    res.send('write get login here');
}

module.exports.postLogin = (req,res) =>{
    var account = {};
    if(req.body.user_name){
        const sql = `Call checkUser('${req.body.user_name}')`
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
                    res.json('wrong password')
                }
            });
        }) 
    }
    else{
        res.json('user name donot exist');
    }
}

module.exports.forgotPassword = (req,res)=>{

}

module.exports.postForgotPassword = async (req,res) =>{

    var userName = req.body.user_name;
    console.log(userName);
    var token = shortid.generate();
    
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: AccountAuth.email, // generated ethereal user
            pass: AccountAuth.password // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    const checkUserSQL = `CALL checkUser('${userName}')`;

    conn.query(checkUserSQL, function(err,data){
        if(err) throw console.error(`error on sql checkusersql`);
        if(data[0].length > 0){//check user exist in db or not
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Coders.Tokyo 👻 <logonswtuesday@gmail.com>"', // sender address
                to: data[0][0].UserName, // list of receivers
                subject: "Reset password", // Subject line
                text: "Here is your link... click to reset password", // plain text body
                html: `<b>Click link below to reset password <a href="http://localhost:3000/auth/reset-password/${token}">http://localhost:3000/auth/reset-password/${token}</a></b>` // html body
            };


            var sql = `CALL createToken('${userName}','${token}')`;

            conn.query(sql,function(err,data){
                if(err) throw console.log(`error when create token in sql`);
                console.log(data)
            })


            

            // send mail with defined transport object
            transporter.sendMail(mailOptions,(err,info)=>{
                console.log("Message sent: %s", info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                res.json('mail reset password sent to your email!!');
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });

            
        }
        else{
            res.json('user not exist');
        }
    })
        
    
}

module.exports.resetPassword = (req,res) =>{
    console.log(req.params.token);
    const sql = `select * from account where resettoken like '${req.params.token}'`;

    conn.query(sql,function(err,data){
        if (err) throw console.error(`error on sql`);
        if(data[0] == null){
            res.json('wrong token');
        }
        else{
            res.render('authorization/reset',{token: req.params.token})
        }
    })
    ///find token and count time expire on db if match using query to reset password
    // res.render('authorization/reset',{token: req.params.token});
}

module.exports.postResetPassword = (req,res) =>{
    console.log(req.params.token)
    console.log(`post me`)
    bcrypt.hash(req.body.new_password,saltRounds,function(err,hash){
        const sql = `CALL resetPassword('${req.params.token}','${hash}')`;
        conn.query(sql,function(err,data){
        if (err) throw console.error(`error on sql`);
            console.log(data);
            const sqlClearToken = `CALL clearToken('${req.params.token}');`
            conn.query(sqlClearToken,function(err,result){
                if (err) throw console.error(`error on sql`);
                res.json('complete');
            });
        });
    })
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