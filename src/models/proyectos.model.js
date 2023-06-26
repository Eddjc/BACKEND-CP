const connection = require("../../connection");
let proyectosModel = {};

proyectosModel.actualizarProyecto = (data, callback) => {
    if (connection) {
        console.log(data);
        try {
            const consulta = `
            CALL SP_ACTUALIZAR_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.nombre_proyecto)},
                ${connection.escape(data.descripcion_proyecto)},
                ${connection.escape(data.id_departamento)},
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.id_actividad_economica)},
                ${connection.escape(data.id_infraestructura)},
                ${connection.escape(data.inversion_solicitada)},
                ${connection.escape(data.aporte_municipal)},
                ${connection.escape(data.longitud)},
                ${connection.escape(data.latitud)},
                ${connection.escape(data.tiempo_ejecucion)},
                ${connection.escape(data.poblacion_beneficiada)},
                ${connection.escape(data.empleos_directos)},
                ${connection.escape(data.empleos_indirectos)},
                ${connection.escape(data.id_aldea)},
                ${connection.escape(data.distancia_proyecto)},
                ${connection.escape(data.creado_por)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.asignarContratista = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_CONTRATISTA(
                ${connection.escape(data.contratista)},
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_admin)},
                ${connection.escape(data.id_institucion)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.asignarOrdenInicio = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_ORDEN_INICIO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.orden_inicio)},
                ${connection.escape(data.id_admin)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.asignarPresupuestoProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_PRESUPUESTO_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.presupuesto)},
                ${connection.escape(data.id_admin)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.crearProyecto = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_CREAR_PROYECTO(
                ${connection.escape(data.nombre_proyecto)},
                ${connection.escape(data.descripcion_proyecto)},
                ${connection.escape(data.id_departamento)},
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.id_aldea)},
                ${connection.escape(data.id_actividad_economica)},
                ${connection.escape(data.id_infraestructura)},
                ${connection.escape(data.inversion_solicitada)},
                ${connection.escape(data.aporte_municipal)},
                ${connection.escape(data.tiempo_ejecucion)},
                ${connection.escape(data.poblacion_beneficiada)},
                ${connection.escape(data.empleos_directos)},
                ${connection.escape(data.empleos_indirectos)},
                ${connection.escape(data.distancia_proyecto)},
                ${connection.escape(data.longitud)},
                ${connection.escape(data.latitud)},
                ${connection.escape(data.creado_por)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }

};

proyectosModel.inhabilitarAnexo = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INACTIVAR_ANEXO(
                ${connection.escape(data.id_anexo)},
                ${connection.escape(data.id_admin)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.insertarAnexo = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_ANEXO(
                ${connection.escape(data.id_referencia)},
                ${connection.escape(data.id_tipo_referencia)},
                ${connection.escape(data.id_fase)},
                ${connection.escape(data.id_seguimiento)},
                ${connection.escape(data.nombre_anexo)},
                ${connection.escape(data.tipo)},
                ${connection.escape(data.url)},
                ${connection.escape(data.id_estado)},
                ${connection.escape(data.id_tipo_documento)},
                ${connection.escape(data.id_usuario)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.actualizarAnexo = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_ANEXO(
                ${connection.escape(data.id_anexo)},
                ${connection.escape(data.id_referencia)},
                ${connection.escape(data.id_tipo_referencia)},
                ${connection.escape(data.id_fase)},
                ${connection.escape(data.id_seguimiento)},
                ${connection.escape(data.nombre_anexo)},
                ${connection.escape(data.tipo)},
                ${connection.escape(data.url)},
                ${connection.escape(data.id_estado)},
                ${connection.escape(data.id_tipo_documento)},
                ${connection.escape(data.id_usuario)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.inhabilitarProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INACTIVAR_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_admin)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerAnexosProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ANEXOS(
                ${connection.escape(data.id_referencia)},
                ${connection.escape(data.id_tipo_referencia)}

            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerDetalleProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_DETALLE_PROYECTO(
                ${connection.escape(data.id_proyecto)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerProyectos = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_PROYECTOS(
                ${connection.escape(data.id_proyecto)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_PROYECTO_SEGUIMIENTO(
                ${connection.escape(data.id_proyecto)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerHojaRuta = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_HOJA_DE_RUTA(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_proceso)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerProyectosMunicipio = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_PROYECTOS_X_MUNICIPIO(
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.id_solicitud)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerSeguimientoProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_SEGUIMIENTOS_PROYECTO(
                ${connection.escape(data.id)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.pagarProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_PAGAR_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_admin)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.obtenerTiposDocumentos = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_TIPOS_DOCUMENTOS(
                ${connection.escape(data.id_fase)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                } else {
                    callback(null, resultado[0]);
                }

            }

            );
        } catch (error) {
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

proyectosModel.actualizarDocumento = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_TIPO_DOCUMENTO(
                ${connection.escape(data.id_documento)},
                ${connection.escape(data.id_tipo_documento)},
                ${connection.escape(data.id_admin)}
            );
            `;
            connection.query(consulta, (error, resultado) => {

                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, resultado[0][0].response);
                }

            }

            );
        } catch (error) {
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

module.exports = proyectosModel;