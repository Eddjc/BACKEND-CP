const contratista = require('../models/contratistas.model');
const manage = require('../utils/management');

module.exports = function(app, auth) {

    app.post('/insertar-contratista',auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                contratista: parametros.contratista,
                estado: 1,
                rtn: parametros.rtn,
                nombre_representante_legal: parametros.nombre_representante_legal,
                dni_representante_legal: parametros.dni_representante_legal,
                id_admin: parametros.id_admin
            };

            contratista.insertarContratistas(data, (error, resultado) => {
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

    app.put('/actualizar-contratista', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id: parametros.id,
                contratista: parametros.contratista,
                estado: parametros.estado,
                rtn: parametros.rtn,
                nombre_representante_legal: parametros.nombre_representante_legal,
                dni_representante_legal: parametros.dni_representante_legal,
                modificado_por: parametros.id_admin
            };

            contratista.actualizarContratista(data, (error, resultado) => {
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
    
    app.get('/obtener-contratista', auth, (req, res) => {
        try {
            const params = req.query;
            const data = {
                id: params.id
            };

            contratista.obtenerContratista(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado;
                    manage.returnSuccess(datos[1], datos, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-informacion-contratista',  (req, res) => {
        try {
            const parametros = req.query;
            const data = {
            };
            contratista.obtenerInformacionContratista(data,(error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado;
                    manage.returnSuccess(datos[1], datos, res);                    
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-proyectos-x-contratistas', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contratista: parametros.id_contratista
            };
            contratista.obtenerProyectos_x_Contratistas(data, (error, resultado) => {
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

     app.get('/obtener-contratos-x-contratistas', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contratista: parametros.id_contratista
            };
            contratista.obtenerContratos_x_Contratistas(data, (error, resultado) => {
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

	
}

}

