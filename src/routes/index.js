const routes = require('express').Router();

const dummy = require('./dummy');

routes.get('/', dummy);

module.exports = routes;