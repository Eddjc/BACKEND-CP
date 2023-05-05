const seguimientos = require('../models/seguimientos.model');
const manage = require('../utils/management');

module.exports = function(app, auth) {

    app.post('/asignar-supervisor', auht, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_supervisor: parametros.id_supervisor,
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
            }

            seguimientos.asignarSupervisor(data, (error, resultado) => {
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

    app.get('/fases-seguimientos', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_usuario: parametros.id_usuario
            };

            seguimientos.obtenerFasesSeguimientos(data, (error, resultado) => {
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

    app.get('/supervisores', auth, (req, res) => {
        try {
            const data = {};

            seguimientos.obtenerSupervisores(data, (error, resultado) => {
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

    app.post('/insertar-seguimiento', auht, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_tipo_fase: parametros.id_tipo_fase,
                avance_fisico: parametros.avance_fisico,
                descripcion: parametros.descripcion,
                id_proyecto: parametros.id_proyecto,
                id_usuario: parametros.id_usuario,
            }

            seguimientos.inactivarSupervisorProyecto(data, (error, resultado) => {
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

    app.post('/inactivar-supervisor-proyecto', auht, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_supervisor: parametros.id_supervisor,
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
            }

            seguimientos.insertarSeguimiento(data, (error, resultado) => {
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

    app.get('/proyectos-supervisor', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_usuario: parametros.id_usuario
            };

            seguimientos.obtenerProyectosSupervisor(data, (error, resultado) => {
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



}