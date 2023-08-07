// Modelos requeridos
const reportes = require('../models/reportes.model');
const manage = require('../utils/management');

// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/reporte-general-cp', (req, res) => {

        try {

            let parameters = req.query;

            const data = {};

            reportes.reporteGeneral(data, (error, resultado) => {
                if (error) {
                    res.status(200).json({
                        status: 'fallido',
                        message: error,
                        data: null
                    });
                } else {

                    res.status(200).json({
                        status: 'exito',
                        message: error,
                        data: resultado[0]
                    });
                }
            });
        } catch (error) {
            res.status(200).json({
                status: 'fallido',
                message: error,
                data: null
            });
        }

    });

    app.get('/reporte-general-cp-red', (req, res) => {

        try {

            let parameters = req.query;

            const data = {};

            reportes.reporteGeneralRed(data, (error, resultado) => {
                if (error) {
                    res.status(200).json({
                        status: 'fallido',
                        message: error,
                        data: null
                    });
                } else {

                    res.status(200).json({
                        status: 'exito',
                        message: error,
                        data: resultado[0]
                    });
                }
            });
        } catch (error) {
            res.status(200).json({
                status: 'fallido',
                message: error,
                data: null
            });
        }

    });
	
    app.get('/reporte-seguimientos-cp', (req, res) => {

        try {

            let parameters = req.query;

            const data = {};

            reportes.reporteSeguimiento(data, (error, resultado) => {
                if (error) {
                    res.status(200).json({
                        status: 'fallido',
                        message: error,
                        data: null
                    });
                } else {

                    res.status(200).json({
                        status: 'exito',
                        message: error,
                        data: resultado[0]
                    });
                }
            });
        } catch (error) {
            res.status(200).json({
                status: 'fallido',
                message: error,
                data: null
            });
        }

    });

    app.post('/usuario-login',  (req, res) => {
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

            reportes.crearUsuarioLogin(data, (error, resultado) => {
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
}