const connection = require("../../connection");
let seguimientosModel = {};

seguimientosModel.asignarSupervisor = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_SUPERVISORES_PROYECTO(
                ${connection.escape(data.id_supervisor)},
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

seguimientosModel.obtenerFasesSeguimientos = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_FASES_SEGUIMIENTOS();
            `
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
    }
}

seguimientosModel.obtenerSupervisores = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_SUPERVISORES();
            `
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
    }
}

seguimientosModel.obtenerSupervisoresProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_SUPERVISORES_PROYECTOS(
                ${connection.escape(data.id_proyecto)}
            );
            `
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
    }
}

seguimientosModel.insertarSeguimiento = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_SEGUIMIENTO(
                ${connection.escape(data.id_usuario)},
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_fase_previa)},
                ${connection.escape(data.id_fase_asignada)},
                ${connection.escape(data.avance_fisico_previo)},
                ${connection.escape(data.avance_fisico_asignado)},
                ${connection.escape(data.valor_financiero_previo)},
                ${connection.escape(data.valor_financiero_asignado)},
                ${connection.escape(data.metros_lineales_terminados)},
                ${connection.escape(data.descripcion)}
            );          `;
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

seguimientosModel.inactivarSupervisorProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_INACTIVAR_SUPERVISOR_PROYECTO(
                ${connection.escape(data.id_supervisor)},
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

seguimientosModel.actualizarProyectoSupervisor = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_ACTUALIZAR_PROYECTO_SUPERVISOR(
                ${connection.escape(data.id_usuario)},
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.longitud)},
                ${connection.escape(data.latitud)},
                ${connection.escape(data.id_aldea)},
                ${connection.escape(data.fecha_inicio)},
                ${connection.escape(data.fecha_finalizacion)}
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

seguimientosModel.inactivarSeguimiento = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_INACTIVAR_SEGUIMIENTO(
                ${connection.escape(data.id_seguimiento)},
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


seguimientosModel.obtenerProyectosSupervisor = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_PROYECTOS_ASIGNADOS_SUPERVISORES(
                ${connection.escape(data.id_usuario)}
            );
            `
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
    }
}

seguimientosModel.obtenerUltimoSeguimiento = (data, callback) => {
    if (connection) {
        console.log(data)
        try {
            const consulta = `
            CALL SP_OBTENER_ULTIMO_SEGUIMIENTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_usuario)}
            );
            `
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
    }
}

seguimientosModel.obtenerSeguimientosProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_SEGUIMIENTOS_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_usuario)}
            );
            `
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
    }
}

seguimientosModel.obtenerAnexosSeguimiento = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_ANEXOS_SEGUIMIENTO(
                ${connection.escape(data.id_seguimiento)},
                ${connection.escape(data.id_tipo_referencia)}
            );
            `
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
    }
}

seguimientosModel.obtenerProyectoSeguimiento = (data, callback) => {
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

module.exports = seguimientosModel;