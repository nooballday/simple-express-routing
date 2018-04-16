'use strict'
const routes = require('express').Router();

const { check, checkSchema }  = require('express-validator/check'); //validator that validate payload or query that sent to each route
const dummy = require('./dummy'); //dummy service created as an exemple
const get_dummy = require('./get_dummy');

//an example of get request
routes.get('/world/:name', checkSchema({
    //add schema validation here, for more information please look at https://github.com/ctavan/express-validator#schema-validation
}), get_dummy)

//an example of post request
routes.post('/hello',[
    //validate payload
    check([
        // see more at https://github.com/ctavan/express-validator#check-api for more info
    ])
] ,dummy);

module.exports = routes;