// Modelos requeridos
const usuarios = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const manage = require('../utils/management');
const CryptoJS = require('crypto-js');
// Exportar Rutas
module.exports = function(app, auth) {

    app.put('/actualizar-usuario', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_rol: parametros.id_rol,                
                dni: parametros.dni,
                nombre_usuario: parametros.nombre_usuario,
                correo: parametros.correo,
                direccion: parametros.direccion,
                telefono: parametros.telefono,
                id_departamento: parametros.id_departamento,
                id_municipio: parametros.id_municipio,
                id_usuario: parametros.id_usuario,
                id_admin: parametros.id_admin
            };
            
            console.log(data, 'datos usuario')
            usuarios.actualizarUsuario(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);    
                } else {
                    let datos = resultado.split('|');
                    manage.returnSuccess(datos[1], datos[0], res);
                }
            });

        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/cambiarContrasenia', auth, (req, res) => {

        try {
            const parametros = req.query;
            hash = CryptoJS.MD5(parametros.contrasenia).toString();
            const data = {
                id_usuario: parametros.id_usuario,
                contrasenia: hash,
                modificado_por: parametros.modificado_por
            };
            usuarios.cambiarContrasenia(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado[0][0].response.split('|');
                    manage.returnSuccess(datos[1], datos[0], res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/detalle-usuario', auth, (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_usuario: parametros.id_usuario,
            };

            usuarios.detalleUsuario(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess('', resultado, res);                    
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.post('/usuario',  (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                dni: parametros.dni,
                nombre_usuario: parametros.nombre_usuario,
                correo: parametros.correo,
                direccion: parametros.direccion,
                telefono: parametros.telefono,
                id_rol: parametros.id_rol,                
                id_departamento: parametros.id_departamento,
                id_municipio: parametros.id_municipio,
                estado: parametros.estado,
                creado_por: parametros.creado_por
            };

            usuarios.crearUsuario(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado.split('|');
                    manage.returnSuccess(datos[1], datos[0], res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/usuarios', auth, (req, res) => {

        try {

            const data = {};

            usuarios.obtenerUsuarios(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                    } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.put('/inactivar-usuario', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_usuario: parametros.id_usuario,
                id_admin: parametros.id_admin
            };

            usuarios.inhabilitarUsuario(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado;
                    manage.returnSuccess('', datos, res);                    
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });
}