require('dotenv').config();
const path = require('path');

const functions = {};

functions.myPath = () => {
  return path.dirname(__dirname);
};

functions.slideOs = () => {
  return process.platform === 'win32' ? '\\' : '/'; 
};

// const storage = process.env.HOME_CLOUD_STORAGE;
const storage = functions.myPath() + functions.slideOs() + 'public';

if (!storage) {
  console.error(
    'Direccion de almacenamiento no definida,',
    'agregar el valor de HOME_CLOUD_STORAGE environment variable'
  );
  process.exit(1);
}

module.exports = storage;