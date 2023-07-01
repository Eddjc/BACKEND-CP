const utils = require('../global/utils');

let saveIpRequest = (req, res, next) => {
    let data = '';
    if (req.method == 'GET' || req.method == 'OPTIONS') {
        data = JSON.stringify(req.query);
    } else {
        data = JSON.stringify(req.body);
    }
    utils.writeRequest(req._parsedUrl.pathname, req.connection.remoteAddress, req.method, data, next);

    next();
};

module.exports = saveIpRequest;