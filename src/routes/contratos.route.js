const contrato = require('../models/contratos.model');
const manage = require('../utils/management');
module.exports = function(app, auth) {

    app.post('/insertar-contrato', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                correlativo_contrato: (parametros.correlativo_contrato && parametros.correlativo_contrato != 'undefined' && parametros.correlativo_contrato != undefined) ? parametros.correlativo_contrato : null,
                firmante: parametros.firmante,
                nombre_contrato: parametros.nombre_contrato,
                fecha_firma: (parametros.fecha_firma && parametros.fecha_firma != 'undefined' && parametros.fecha_firma != undefined) ? parametros.fecha_firma : null,
                duracion_contrato: parametros.duracion_contrato,
                firmado: parametros.firmado ? 1 : 0,
                monto_total: parametros.monto_total,
                monto_presupuestado: parametros.monto_presupuestado,
                detalles: parametros.detalles,
                id_contratista: parametros.id_contratista,
                id_institucion: parametros.id_institucion,
                id_admin: parametros.id_admin
            };

            contrato.insertarContrato(data, (error, resultado) => {
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

    app.post('/asignar-proyecto-contrato', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_contrato: parametros.id_contrato,
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
            };

            contrato.asignarContratoProyecto(data, (error, resultado) => {
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

    app.put('/actualizar-contrato',  (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id: parametros.id,
                correlativo_contrato: parametros.correlativo_contrato,
                nombre_contrato: parametros.nombre_contrato,
                firmante: parametros.firmante,
                fecha_firma: (parametros.fecha_firma && !['undefined', undefined, null, 'null'].includes(parametros.fecha_firma)) ? parametros.fecha_firma : null,
                duracion_contrato: parametros.duracion_contrato,
                firmado: parametros.firmado == 'true' ? 1 : 0,
                monto_total: parametros.monto_total,
                monto_presupuestado: parametros.monto_presupuestado,
                detalles: parametros.detalles,
                id_contratista: parametros.id_contratista,
                id_institucion: parametros.id_institucion,
                id_admin: parametros.id_admin
            };

            contrato.actualizarContrato(data, (error, resultado) => {
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
    
    app.get('/obtener-contrato',  (req, res) => {
        try {
            const params = req.query;
            const data = {
                id: params.id_contrato
            };
            contrato.obtenerContrato(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(null, resultado[0], res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-contratos',  (req, res) => {
        try {
            const parametros = req.query;
            const data = {
            };
            contrato.obtenerContratos(data,(error, resultado) => {
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

    app.get('/obtener-informacion-contratos',  (req, res) => {
        try {
            const parametros = req.query;
            const data = {
            };
            contrato.obtenerInformacionContratos(data,(error, resultado) => {
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

    app.get('/obtener-proyectos-del-contrato', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contrato: parametros.id_contrato
            };
            contrato.obtenerProyectosDelContrato(data, (error, resultado) => {
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

