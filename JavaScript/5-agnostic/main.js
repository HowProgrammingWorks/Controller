'use strict';

const server = require('./http.js');
const db = require('./db.js');

const PORT = 8000;

const routing = {
  user: require('./user.js'),
  country: db('country'),
  city: db('city'),
};

server(routing, PORT);
