'use strict'

require('dotenv').config(); //load enviroment variable

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('express-jwt');
const formdataParser = require('multer')().fields([]) // allow form data and multipart to go through API

const routes = require('./routes');

const logInfo = require('./helper/logger').infolog

const port = process.env.SERVERPORT;

const _authConfig = {
    secret: process.env.SECRETKEY //define the jwt config here
}

app.use(jwt(_authConfig).unless({
    path : [] //add your desired path to exclude it from auth
}))

app.use(bodyParser.json())
app.use(formdataParser) //use as middleware in service 
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({
            "message" : "Missing Authorization"
        });
    }
})

app.use(routes);

app.listen(
    port,
    ()=> {
        logInfo.info("Server Running At "+ new Date())
        console.log("App Running at Port : "+ port);
    }
)