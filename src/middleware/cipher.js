const CryptoJS = require("crypto-js");
const keys = require("../utils/keys");
let cipher = {};

cipher.cipher = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), keys.transfer).toString();
};

const d2 = (data) => {
    return CryptoJS.AES.decrypt(data, keys.transfer).toString(CryptoJS.enc.Utf8);
};

cipher.decipher = (req, res, next) => {
    let data = '';
    if (req.method == 'GET' || req.method == 'OPTIONS') {
        data = req.query.params;
        let newquery = JSON.parse(d2(data));
        req.query = newquery;
    } else {
        console.log(req.body.body)
        data = req.body.body;
        let newbody = JSON.parse(d2(data));
        const newJson = newbody.updates.reduce((acc, curr) => {
            acc[curr.param] = curr.value;
            return acc;
        }, {});
        req.body = newJson;
    }
    next();
};

module.exports = cipher;