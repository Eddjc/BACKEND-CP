// Importamos driver mysql
const mysql = require('mysql');
require('dotenv').config();

var poolConnection = mysql.createPool({
    connectionLimit: 50,
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    database: process.env.DB
});

poolConnection.getConnection((error, connection) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('PROTOCOL_CONNECTION_LOST');
        }

        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('ER_CON_COUNT_ERROR');
        }

        if (error.code === 'ECONNREFUSED') {
            console.error('ECONNREFUSED');
        }

        console.error(error);
    }

    if (connection) {
        connection.release();
    }

    return;
});

module.exports = poolConnection;