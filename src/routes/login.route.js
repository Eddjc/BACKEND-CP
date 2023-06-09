// Modelos requeridos
const login = require('../models/login.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const manage = require('../utils/management');
const cipher = require('../middleware/cipher');
const CryptoJS = require('crypto-js');
// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/login', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                correo: parametros.correo,
                contrasenia: parametros.contrasenia
            };
            
            login.login(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado[1][0].response.split('|');
                    if (parseInt(datos[0]) > 0) {
                        //const esValida = data.contrasenia == datos[1];
                        const esValida = CryptoJS.MD5(data.contrasenia) == datos[1];
                        if (datos[2] == 'Sesion activa encontrada') {
                            res.status(200).json(cipher.cipher({
                                status: 'fallido',
                                message: esValida ? datos[2] : datos[2] + ' y contraseña incorrecta',
                                data: esValida ? datos[0] : 0
                            })); 
                        } else {
                            if (esValida) {
                                const token = jwt.sign({
                                    user_id: datos[0], user: datos[3]
                                }, process.env.TOKEN_KEY, {
                                    expiresIn: process.env.EXPIRES_TIME
                                });
    
                                login.establecerSesion({id_usuario: datos[0]}, (error, resultado2) => {
                                    if (error) {
                                        manage.returnError(error, res);
                                    } else {
                                        const user = {
                                            id_usuario: datos[0],
                                            nombre: datos[2],
                                            id_departamento: datos[3],
                                            id_municipio: datos[4],
                                            id_rol: datos[5],
                                            correo: datos[6],
                                            departamento: datos[7],
                                            municipio: datos[8],
                                            rol: datos[9],
                                            _token: token
                                        };
            
                                        const data2 = {
                                            id_usuario: datos[0]
                                        };
            
                                        login.obtenerPermisos(data2, (error, resultado) => {
                                            if (error) {
                                                manage.returnError(error, res);
                                            } else {
                                                const token_permisos = jwt.sign({
                                                    permisos: resultado[0],
                                                }, process.env.TOKEN_KEY, {
                                                    expiresIn: process.env.EXPIRES_TIME
                                                });                                                
                                                user.permisos = resultado[0];
                                                // user.token_permisos = token_permisos;
                                                res.status(200).json(cipher.cipher({
                                                    status: 'exito',
                                                    message: "login completado",
                                                    data: user
                                                }));
                                            }
                                        });
                                    }
                                });
                            } else {
                                res.status(200).json({
                                    status: 'fallido',
                                    message: "Usuario o contraseña erronea",
                                    data: null
                                });
                            }
                        }                        
                    } else {
                        manage.returnError(datos[1], res);
                    }
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/logout', auth, (req, res) => {

        try {
            const parametros = req.query;

            const data = {
                id_usuario: parametros.id_usuario
            };

            login.logout(data, (error, resultado) => {
                if (error) {
                    manage.returnSuccess(error, resultado, res);
                } else {
                    let datos = resultado[0][0].response.split('|');
                    manage.returnSuccess(datos[1], {}, res);
                }
            });
        } catch (error) {
            manage.returnSuccess(error, resultado, res);
        }

    });

    app.get('/logoutWithId', (req, res) => {

        try {
            const parametros = req.query;

            const data = {
                id_usuario: parametros.id_usuario
            };

            login.logout(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado[0][0].response.split('|');
                    manage.returnSuccess(datos[1], {}, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

}