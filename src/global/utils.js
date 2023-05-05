const fs = require('fs');
const path = require('path');

const functions = {};

functions.writeRequest = (endpoint, ip, method, data, next) => {
    let dir = path.dirname(__dirname) + '/logs/requests';
    let yourDate = new Date();
    yourDate = yourDate.toISOString().split('T')[0];
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, (err) => {
            console.error(err);
        });
    }
    let message = '[' + new Date() + ']-[' + endpoint + ']-[' + ip + ']-[' + method + ']-[' + data + ']\n';
    let fileLog = dir + '/requests-' + yourDate + '.log';
    fs.appendFileSync(fileLog, message, (error) => {
        if (error) {
            console.error(error);
        }
        next();
    });
};

module.exports = functions;