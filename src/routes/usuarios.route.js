// Modelos requeridos
const usuarios = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const manage = require('../utils/management');
// Exportar Rutas
module.exports = function(app, auth) {

    app.put('/actualizar-usuario', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_usuario: parametros.id_usuario,
                nombre: parametros.nombre,
                telefono: parametros.telefono,
                direccion: parametros.direccion,
                correo: parametros.correo,
                dni: parametros.dni,
                id_departamento: parametros.id_departamento,
                id_municipio: parametros.id_municipio,
                id_organizacion: parametros.id_organizacion,                
                creado_por: parametros.creado_por
            };

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

            var salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(parametros.contrasenia, salt);

            const data = {
                id_usuario: parametros.id_usuario,
                contrasenia: hash,
                id_admin: parametros.id_admin
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

    app.post('/usuario', auth,  (req, res) => {

        try {
            const parametros = req.body;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(parametros.contrasenia, salt);
            const data = {
                contrasenia: hash,
                telefono: parametros.telefono,
                correo: parametros.correo,
                direccion: parametros.direccion,
                dni: parametros.dni,
                nombre: parametros.nombre,
                id_departamento: parametros.id_departamento,
                id_municipio: parametros.id_municipio,
                id_organizacion: parametros.id_organizacion,                
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