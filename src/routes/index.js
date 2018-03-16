const routes = require('express').Router();

const dummy = require('./dummy');

routes.post('/', dummy);

module.exports = routes;