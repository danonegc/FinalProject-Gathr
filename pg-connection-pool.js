var pg = require('pg');
var url = require('url');

try {
  require('dotenv').config();
} catch(e) {

}

console.info('DATABASE_URL:', process.env.DATABASE_URL);
var params = url.parse(process.env.DATABASE_URL);
var auth = params.auth.split(':');

var config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: params.hostname !== 'localhost'
};

module.exports = new pg.Pool(config);
