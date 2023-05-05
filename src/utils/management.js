const cipher = require('../middleware/cipher');

let management = {};

management.returnError = (error, res) => {
    res.status(200).json(cipher.cipher({
        status: 'fallido',
        message: error,
        data: null
    }));
};

management.returnSuccess = (mensaje, resultado, res) => {
    res.status(200).json(cipher.cipher({
        // status: resultado < 0 ? 'exito' : 'fallido',
        status: 'exito',
        message: mensaje,
        // error: null,
        data: resultado
    }));
};

module.exports = management;

// manage.returnError(error, res);

// manage.returnSuccess(error, resultado, res);
