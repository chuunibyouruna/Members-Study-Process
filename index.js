// require('dotenv').config();
const express = require('express');
const pug = require('pug');
const upload = require('express-fileupload');
const router = require('./routes/router');
const userRouter = require('./routes/user-route');

const port = 3000;

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// middleware allow request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    next();
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', './views');


app.use(router);
app.use('/users', userRouter);
app.listen(port, () => console.log(`Server is started on port ${port}`));






// VIEW

app.get('/home', function (req, res) {
    res.render('home/index', { title: 'Coders.tokyo Cần Thơ - Trang chủ' });
})