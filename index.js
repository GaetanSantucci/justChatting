// ~ environnement
import 'dotenv/config';

// ~ import express and configure router
import express from 'express';
const app = express();

import { router } from './app/router/index.js';
import {_404} from './app/controller/errorController.js';

// ~ import debug
import debug from 'debug';
const logger = debug('entrypoint');

// If you have your node.js behind a proxy and are using secure: true, you need to set 'trust proxy' in express
// app.set('trust proxy', 1) // trust first proxy HEROKU

// ~ import and configure session
import session from 'express-session';
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    cookie: { 
        secure : true,
        sameSite: 'lax', // or 'strict'
        maxAge: 24 * 60 * 60 * 1000 //24 hours
        //expires : new Date(Date.now() + 60 * 60 * 1000) //1 hour
        }
}));

// ~ cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');

    // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    next();

});

// ~ import multer 
import multer from "multer";
let upload = multer();
app.use(upload.none())

// ~ url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ~ statics
// ~ ------------------------
app.use("/", express.static("public"));

// ~ gestion du moteur de vue
// ~ ------------------------
app.set("view engine", "ejs");
app.set("views", "app/views");

// ~ router
app.use(router);
app.use(_404)

// ~ Server listening 
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
    logger(`App listen on http://localhost:${PORT}`);
});