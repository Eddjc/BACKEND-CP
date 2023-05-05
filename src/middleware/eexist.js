const { manageErr } = require('./base');

const eexist = (err, req, res, next) => {
  manageErr(err, {
    code: 'EEXIST',
    message: 'Directorio ya existe',
    statusCode: 400,
  });
  next(err);
};

module.exports = eexist;