'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('express-jwt');

const routes = require('./routes');

const port = 8876;

const _authConfig = {
    secret: 'somesecrets' //define the jwt config here
}

app.use(jwt(_authConfig).unless({
    path : [] //add your desired path to exclude it from auth
}))

app.use(bodyParser.json());

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
        console.log("App Running at Port : "+ port);
    }
)