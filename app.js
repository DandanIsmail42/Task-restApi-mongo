require('./config/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const methodOverride = require('method-override');


const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


app.use(cookieParser('secrect'));
app.use(
    session({
        cookie: { maxAge: 6000},
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());

app.use(methodOverride('_method'));

const productRouter_v3 = require('./app/product_v3/routes');
const productRouter_v4 = require('./app/product_v4/routes');
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/api/v3', productRouter_v3);
app.use('/api/v4', productRouter_v4);
app.listen(port, () => console.log('server: http://localhost:3000'));
