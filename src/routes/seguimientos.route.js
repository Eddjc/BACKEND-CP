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
                id_fase_previa: parametros.id_fase_previa,
                id_fase_asignada: parametros.id_fase_asignada,
                avance_fisico_previo: parametros.avance_fisico_previo,
                avance_fisico_asignado: parametros.avance_fisico_asignado,
                valor_financiero_previo: parametros.valor_financiero_previo,
                valor_financiero_asignado: parametros.valor_financiero_asignado,
                metros_lineales_terminados: parametros.metros_lineales_terminados,
                descripcion: parametros.descripcion
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

    app.put('/proyecto-seguimiento-supervisor', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_usuario: parametros.id_usuario,
                id_proyecto: parametros.id_proyecto,
                longitud: parametros.longitud,
                latitud: parametros.latitud,
                id_aldea: parametros.id_aldea,
                fecha_inicio: parametros.fecha_inicio,
                fecha_finalizacion: parametros.fecha_finalizacion
            }
            
            seguimientos.actualizarProyectoSupervisor(data, (error, resultado) => {
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

    app.put('/inactivar-seguimiento', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_seguimiento: parametros.id_seguimiento,
                id_admin: parametros.id_usuario
            }
            seguimientos.inactivarSeguimiento(data, (error, resultado) => {
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
                id_proyecto: parametros.id_proyecto,
                id_usuario: parametros.id_usuario
            };

            seguimientos.obtenerUltimoSeguimiento(data, (error, resultado) => {
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
                id_proyecto: parametros.id_proyecto,
                id_usuario: parametros.id_usuario
            };

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

    app.get('/anexos-seguimiento', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_seguimiento: parametros.id_seguimiento,
                id_tipo_referencia: parametros.id_tipo_referencia
            };
            
            seguimientos.obtenerAnexosSeguimiento(data, (error, resultado) => {
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