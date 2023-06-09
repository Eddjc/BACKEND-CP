/* ============== Dependencias ============== */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var cipherMid = require('./src/middleware/cipher');
const fs = require('fs');
const https = require('https');
const utils = require('./src/global/utils');

/* ============== Instancia de servidor ============== */
const app = express();

/* ============== Middlewares ============== */
const auth = require('./src/middleware/auth');
//const ip = require('./src/middleware/ip');

/* ============== Middlewares Archivos Pablo ============== */
const enoent = require('./src/middleware/enoent');
const eexist = require('./src/middleware/eexist');
const err = require('./src/middleware/err');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({origins: ['*']}));
require("./src/routes/reportes.route")(app, auth);

/* Cors */
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* Errors */
app.use(enoent);
app.use(eexist);
app.use(err);
/* Desencriptar */
app.use(cipherMid.decipher);
//app.use(ip);


/* ============== Archivos estaticos ============== */
app.use(express.static('./public'));



/* ============== Rutas gestionadas ==============*/
require("./src/routes/portal.route")(app, auth);
require("./src/routes/login.route")(app, auth);
require("./src/routes/bi.route")(app, auth);
require("./src/routes/anexo.route")(app, auth);
require("./src/routes/general.route")(app, auth);
require("./src/routes/proyectos.route")(app, auth);
require("./src/routes/usuarios.route")(app, auth);
require("./src/routes/seguimientos.route")(app, auth);


// const http = require('http').createServer(app, {
//     cors: {
//         origins: ['*']
//     }
// });
// /* ============== Puerto ============== */
// app.set('port', 3501);
// http.listen(app.get('port'), () => {
//     console.log(`Server on port ${app.get('port')}`);
// });

// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/sae.sit.gob.hn/privkey.pem', 'utf-8'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/sae.sit.gob.hn/fullchain.pem', 'utf-8')
// 	key: fs.readFileSync('C:/ssl/ssl.key', 'utf-8'),
// 	cert: fs.readFileSync('C:/ssl/ssl.crt', 'utf-8'),
// 	ca: [ fs.readFileSync('C:/ssl/ssl.CA', 'utf-8') ]
// };

// https.createServer(options, app).listen( 3500, function(req, res) {
//     console.log(`Server on port 3500`);
// });
app.listen(3501, function(req, res) {
    console.log(`Server on port 3501`);
});