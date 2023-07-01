const { manageErr } = require('./base');

const enoent = (err, req, res, next) => {
  manageErr(err, {
    code: 'ENOENT',
    message: 'Archivo o directorio no existe',
    statusCode: 400,
  });
  next(err);
};

module.exports = enoent;