const seguimientos = require('../models/seguimientos.model');
const manage = require('../utils/management');

module.exports = function(app, auth) {

    app.post('/asignar-supervisor', auth, (req, res) => {
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
            data = {}
            
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

    app.get('/obtener-supervisores-proyecto', auth, (req, res) => {
        try {
            const data = req.query; 

            seguimientos.obtenerSupervisoresProyecto(data, (error, resultado) => {
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

    app.post('/insertar-seguimiento', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_usuario: parametros.id_usuario,
                id_proyecto: parametros.id_proyecto,
                id_fase: parametros.id_fase,
                fase_actual: parametros.fase_actual,
                valor_actual: parametros.valor_actual,
                avance: parametros.avance,
                avance_financiero: parametros.avance_financiero,
                observacion_proyecto: parametros.observacion_proyecto
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

    app.put('/inactivar-supervisor-proyecto', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_supervisor: parametros.id_supervisor,
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
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

    app.get('/ultimo-seguimiento', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_proyecto: parametros.id_proyecto
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

    app.get('/seguimientos-proyecto', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_proyecto: parametros.id_proyecto
            };

            console.log(data);

            seguimientos.obtenerSeguimientosProyecto(data, (error, resultado) => {
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

    app.get('/proyecto-seguimiento', auth, (req, res) => {

        try {
            parametros = req.query
            const data = {
                id_proyecto:parametros.id_proyecto
            };


            seguimientos.obtenerProyectoSeguimiento(data, (error, resultado) => {
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