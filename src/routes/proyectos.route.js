// Modelos requeridos
const proyectos = require('../models/proyectos.model');
const manage = require('../utils/management');
const cipher = require('../middleware/cipher');
// Exportar Rutas
module.exports = function(app, auth) {


    app.put('/actualizar-proyecto', auth, (req, res) => {
        console.log(req.body)
        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                nombre_proyecto: parametros.nombre_proyecto,
                descripcion_proyecto: parametros.descripcion_proyecto,
                id_departamento : parametros.id_departamento,
                id_municipio : parametros.id_municipio,
                id_actividad_economica: parametros.id_actividad_economica,
                id_infraestructura: parametros.id_infraestructura,
                aporte_municipal: parametros.aporte_municipal,
                inversion_solicitada: parametros.inversion_solicitada,
                longitud: parametros.longitud,
                latitud: parametros.latitud,
                tiempo_ejecucion: parametros.tiempo_ejecucion,
                poblacion_beneficiada: parametros.poblacion_beneficiada,
                empleos_directos: parametros.empleos_directos,
                empleos_indirectos: parametros.empleos_indirectos,
                id_aldea : parametros.id_aldea,
                distancia_proyecto : parametros.distancia_proyecto,
                creado_por: parametros.creado_por
            };

            proyectos.actualizarProyecto(data, (error, resultado) => {
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

    app.put('/actualizar-proyecto-detalle', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                monto_aprobado: parametros.monto_aprobado,
                observaciones: parametros.observaciones,
                id_estado : parametros.id_estado,
                id_usuario: parametros.id_usuario
            };

            proyectos.actualizarProyectoDetalle(data, (error, resultado) => {
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
    app.put('/asignar-contratista', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                contratista: parametros.contratista,
                id_admin: parametros.id_admin,
                id_institucion: parametros.id_institucion
            };

            proyectos.asignarContratista(data, (error, resultado) => {
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

    app.get('/detalle-proyecto', auth, (req, res) => {

        try {

            const data = req.query;

            proyectos.obtenerDetalleProyecto(data, (error, resultado) => {
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

    app.get('/detalles-proyectos', auth, (req, res) => {

        try {

            const data = req.query;

            proyectos.obtenerProyectos(data, (error, resultado) => {
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

    app.put('/asignar-supervisor', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                supervisor: parametros.supervisor,
                id_admin: parametros.id_admin,
                id_institucion: parametros.id_institucion
            };

            proyectos.asignarSupervisor(data, (error, resultado) => {
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

    app.put('/inactivar-anexo', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_anexo: parametros.id_anexo,
                id_admin: parametros.id_admin
            };

            proyectos.inhabilitarAnexo(data, (error, resultado) => {
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

    app.put('/inactivar-proyecto', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
            };

            proyectos.inhabilitarProyecto(data, (error, resultado) => {
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

    app.post('/insertar-anexo', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_referencia: parametros.id_referencia,
                id_tipo_referencia: parametros.id_tipo_referencia,
                id_fase: parametros.id_fase??0,
                id_seguimiento: parametros.id_seguimiento??0,
                nombre_anexo:parametros.nombre_anexo,
                tipo:parametros.tipo,
                url: parametros.url,
                id_estado : parametros.id_estado,
                id_tipo_documento: parametros.id_tipo_documento,
                id_usuario: parametros.id_usuario
            };

            proyectos.insertarAnexo(data, (error, resultado) => {
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

    app.put('/actualizar-anexo', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_anexo:parametros.id_anexo,
                id_referencia: parametros.id_referencia,
                id_tipo_referencia: parametros.id_tipo_referencia,
                id_fase: parametros.id_fase??0,
                id_seguimiento: parametros.id_seguimiento??0,
                nombre_anexo:parametros.nombre_anexo,
                tipo:parametros.tipo,
                url: parametros.url,
                id_estado : parametros.id_estado,
                id_tipo_documento: parametros.id_tipo_documento,
                id_usuario: parametros.id_usuario
            };

            proyectos.actualizarAnexo(data, (error, resultado) => {
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


    app.get('/listar-anexos-proyecto', auth, (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_referencia: parametros.id_proyecto,
                id_tipo_referencia: parametros.id_referencia
            };

            proyectos.obtenerAnexosProyecto(data, (error, resultado) => {
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

    app.put('/pagar-proyecto', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                id_admin: parametros.id_admin
            };

            proyectos.pagarProyecto(data, (error, resultado) => {
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

    app.put('/presupuesto-proyecto', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                presupuesto: parametros.presupuesto,
                id_admin: parametros.id_admin
            };

            proyectos.asignarPresupuestoProyecto(data, (error, resultado) => {
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

    app.post('/proyecto', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                nombre_proyecto: parametros.nombre_proyecto,
                descripcion_proyecto: parametros.descripcion_proyecto,
                id_departamento : parametros.id_departamento,
                id_municipio : parametros.id_municipio,
                id_actividad_economica: parametros.id_actividad_economica,
                id_infraestructura: parametros.id_infraestructura,
                inversion_solicitada: parametros.inversion_solicitada,
                aporte_municipal: parametros.aporte_municipal,
                longitud: parametros.longitud,
                latitud: parametros.latitud,
                tiempo_ejecucion: parametros.tiempo_ejecucion,
                poblacion_beneficiada: parametros.poblacion_beneficiada,
                empleos_directos: parametros.empleos_directos,
                empleos_indirectos: parametros.empleos_indirectos,
                id_aldea : parametros.aldea,
                distancia_proyecto : parametros.distancia_proyecto,
                creado_por: parametros.id_usuario
            };

            proyectos.crearProyecto(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    let datos = resultado.split('|');
                    
                    res.status(200).json(cipher.cipher({
                        status: datos[0] > 0 ? 'exito' : 'fallido',
                        message: datos[1],
                        data: datos[0]
                        })); 
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/proyectos', auth, (req, res) => {

        try {

            const data = {};

            proyectos.obtenerProyectos(data, (error, resultado) => {
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

    app.get('/proyecto', auth, (req, res) => {

        try {
            parametros = req.query
            const data = {
                id_proyecto:parametros.id_proyecto
            };


            proyectos.obtenerProyecto(data, (error, resultado) => {
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


    app.get('/proyectos-municipios', auth, (req, res) => {

        try {
            const parametros = req.query;

            const data = {
                id_solicitud: parametros.id_solicitud,
                id_municipio: parametros.id_municipio
            }

            proyectos.obtenerProyectosMunicipio(data, (error, resultado) => {
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

    app.get('/seguimiento-proyecto', auth, (req, res) => {

        try {

            const data = req.query;

            proyectos.obtenerSeguimientoProyecto(data, (error, resultado) => {
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

    app.get('/obtener-tipos-documentos', auth, (req, res) => {

        try {
            const parametros = req.query;

            const data = {
                id_fase: parametros.id_fase
            }

            proyectos.obtenerTiposDocumentos(data, (error, resultado) => {
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

    app.put('/documento', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_documento: parametros.id_documento,
                id_tipo_documento: parametros.id_tipo_documento,
                id_admin: parametros.id_admin
            };

            proyectos.actualizarDocumento(data, (error, resultado) => {
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

    app.post('/crear-correlativo', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_departamento: parametros.id_departamento,
                id_municipio: parametros.id_municipio,
                id_admin: parametros.id_admin
            };

            proyectos.crearCorrelativo(data, (error, resultado) => {
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

    app.post('/enviar-correo', auth, (req, res) => {
        try {
            const parametros = req.body;
            const data = {
                id_proyecto: parametros.id_proyecto,
                asunto: parametros.asunto,
                correo: parametros.correo,
                mensaje: parametros.mensaje
            };

            // console.log(data);
            proyectos.enviarCorreo(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(datos[1], datos[0], res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });



    app.get('/obtener-tipos-documento-del-proyecto', auth, (req, res) => {
        try {
            const data = req.query; 

            proyectos.obtenerTipoDocumentoPorProyecto(data, (error, resultado) => {
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

    app.put('/actualizar-documentos-revisados-por-proyectos', auth, (req, res) => {

        try {
            const parametros = req.body;
            const data = {
                id_tipo_documento: parametros.id_tipo_documento,
                id_proyecto: parametros.id_proyecto,
                revisado: parametros.revisado,
                id_admin: parametros.id_admin
            };
            
            proyectos.actualizarDocumentosPorProyecto(data, (error, resultado) => {
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