import fs from 'fs';
import LineByLineReader from 'line-by-line';
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import multer from 'multer';
import compression from 'compression';
import helmet from 'helmet';

// GLOBALS

const app = express();
//app.use( compression() );
//app.use( helmet() );
//app.use( express.static( 'dist' ) );
//const urlencodedParser = bodyParser.urlencoded( { extended: false } );
//const jsonParser = bodyParser.json();

// END GLOBALS

// DATABASE
/*
//mysql://bf625d1cf3ab45:6d68558b@us-cdbr-iron-east-04.cleardb.net/heroku_b2cf77a96af7a57?reconnect=true
const mysqlHostName = 'us-cdbr-iron-east-04.cleardb.net';
const mysqlUserName = 'bf625d1cf3ab45';
const mysqlUserPassword = '6d68558b';
const mysqlDatabase = 'heroku_b2cf77a96af7a57';

const mysqlConnection = mysql.createConnection( {
  host: mysqlHostName,
  user: mysqlUserName,
  password: mysqlUserPassword,
  database: mysqlDatabase,
  ssl: {
    ca: fs.readFileSync( `${__dirname}/mysql/cleardb-ca.pem` ),
    key: fs.readFileSync( `${__dirname}/mysql/bf625d1cf3ab45-key.pem` ),
    cart: fs.readFileSync( `${__dirname}/mysql/bf625d1cf3ab45-cert.pem` )
  }
} );

// Test connection
mysqlConnection.connect( error => {
  if ( error ) throw error;

  console.log(
    `Connected to ${mysqlHostName} MySQL database as user ${mysqlUserName}.`
  );
  mysqlConnection.end();
} );

app.get( '/api/getUsername', ( request, response ) =>
  response.send( {
    username: os.userInfo().username
  } )
);
*/
// END DATABASE

app.listen( 8080, () => console.log( 'Listening on port 8080!' ) );
