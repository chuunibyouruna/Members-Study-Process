require('dotenv').config();
const express = require('express');
const pug = require('pug');
const upload = require('express-fileupload');
const router = require('./routes/router');
const userRouter = require('./routes/user-route');

const port = 3000;

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine','pug');
app.set('views','./views');


app.use(router);
app.use('/users', userRouter);
app.listen(port,()=> console.log(`Server is started on port ${port}`));