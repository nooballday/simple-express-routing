'use strict'

const express = require('express');
const app = express();

const routes = require('./routes');

const port = 8876;

app.use(routes);

app.listen(
    port,
    ()=> {
        console.log("App Running at Port : "+ port);
    }
)