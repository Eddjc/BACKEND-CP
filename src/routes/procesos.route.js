const procesos = require('../models/procesos.model');
const manage = require('../utils/management');

module.exports = function(app) {

    app.get('/obtener-elementos-lista', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_lista: parametros.id_lista
            };

            procesos.obtenerElementosLista(data, (error, resultado) => {
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

    app.get('/obtener-elementos-contrato', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contrato: parametros.id_contrato,
                id_proceso: parametros.id_proceso,
                id_etapa: parametros.id_etapa
            };

            procesos.obtenerElementosContrato(data, (error, resultado) => {
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

    app.get('/obtener-etapas', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_proceso: parametros.id_proceso
            };

            procesos.obtenerEtapas(data, (error, resultado) => {
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

    app.get('/obtener-listas-etapa', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_etapa: parametros.id_etapa
            };

            procesos.obtenerListasEtapa(data, (error, resultado) => {
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

    app.get('/obtener-procesos', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
            };

            procesos.obtenerProceso(data, (error, resultado) => {
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

    app.get('/obtener-procesos-contrato', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contrato: parametros.id_contrato
            };

            procesos.obtenerProcesosContrato(data, (error, resultado) => {
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

    app.get('/obtener-procesos-no-contrato', (req, res) => {

        try {
            const parametros = req.query;
            const data = {
                id_contrato: parametros.id_contrato
            };

            procesos.obtenerProcesosNoContrato(data, (error, resultado) => {
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

    app.post('/asignar-proceso', (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_contrato: parametros.id_contrato,
                id_proceso: parametros.id_proceso,
                id_admin: parametros.id_admin
            };

            procesos.asignarProceso(data, (error, resultado) => {
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

    app.post('/insertar-proceso', (req, res) => {
        try {
            const parametros = req.body;
            console.log(req.body, req.query);
            const data = {
                activo: 1,
                proceso: parametros.proceso,
                descripcion: parametros.descripcion,
                id_admin: parametros.id_admin,
            };

            procesos.insertarProceso(data, (error, resultado) => {
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

    app.post('/insertar-etapa', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                etapa: parametros.etapa,
                ordenamiento: parametros.ordenamiento,
                id_proceso: parametros.id_proceso,
                id_admin: parametros.id_admin
            };

            procesos.insertarEtapa(data, (error, resultado) => {
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

    app.post('/insertar-lista', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                lista: parametros.lista,
                id_etapa: parametros.id_etapa,
                id_admin: parametros.id_admin,
            };

            procesos.insertarLista(data, (error, resultado) => {
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

    app.post('/insertar-elemento', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                elemento: parametros.elemento,
                descripcion: parametros.descripcion,
                admite_adjunto: parametros.admite_adjunto,
                requiere_adjunto: parametros.requiere_adjunto,
                id_lista: parametros.id_lista,
                id_admin: parametros.id_admin,
            };

            procesos.insertarElemento(data, (error, resultado) => {
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

    app.post('/registrar-anotacion-hoja-ruta', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_etapa: parametros.id_etapa,
                id_proyecto: parametros.id_proyecto,
                anotacion: parametros.anotacion,
                id_admin: parametros.id_admin,
            };

            procesos.registrarAnotacionHojaRuta(data, (error, resultado) => {
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

    app.post('/registrar-elemento-lista-proyecto', (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_elemento: parametros.id_elemento,
                id_proyecto: parametros.id_proyecto,
                valor: parametros.valor,
                id_admin: parametros.id_admin,
            };

            procesos.registrarElementoListaProyecto(data, (error, resultado) => {
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

    app.put('/inactivar-proceso', (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proceso: parametros.id_proceso,
                id_admin: parametros.id_admin
            };

            procesos.inhabilitarProceso(data, (error, resultado) => {
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