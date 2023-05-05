const connection = require("../../connection");
let procesosModel = {};

procesosModel.asignarProceso = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_PROCESO_CONTRATO(
                ${connection.escape(data.id_contrato)},
                ${connection.escape(data.id_proceso)},
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

procesosModel.insertarProceso = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_PROCESO(
                ${connection.escape(data.activo)},
                ${connection.escape(data.proceso)},
                ${connection.escape(data.descripcion)},
                ${connection.escape(data.id_admin)}
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

procesosModel.inhabilitarProceso = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INACTIVAR_PROCESO(
                ${connection.escape(data.id_proceso)},
                ${connection.escape(data.id_admin)}
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

procesosModel.insertarEtapa = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_ETAPA(
                ${connection.escape(data.etapa)},
                ${connection.escape(data.ordenamiento)},
                ${connection.escape(data.id_proceso)},
                ${connection.escape(data.id_admin)}
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

procesosModel.insertarLista = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_LISTA(
                ${connection.escape(data.lista)},
                ${connection.escape(data.id_etapa)},
                ${connection.escape(data.id_admin)}
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

procesosModel.insertarElemento = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_ELEMENTO(
                ${connection.escape(data.elemento)},
                ${connection.escape(data.descripcion)},
                ${connection.escape(data.admite_adjunto)},
                ${connection.escape(data.requiere_adjunto)},
                ${connection.escape(data.id_lista)},
                ${connection.escape(data.id_admin)}


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

procesosModel.obtenerElementosLista = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ELEMENTOS_LISTA(
                ${connection.escape(data.id_lista)}
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

procesosModel.obtenerElementosContrato = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ELEMENTOS_CONTRATO(
                ${connection.escape(data.id_contrato)},
                ${connection.escape(data.id_proceso)},
                ${connection.escape(data.id_etapa)}
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

procesosModel.obtenerEtapas = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ETAPAS_PROCESO(
                ${connection.escape(data.id_proceso)}
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

procesosModel.obtenerListasEtapa = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_LISTAS_ETAPA(
                ${connection.escape(data.id_etapa)}
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

procesosModel.obtenerProceso = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_PROCESOS();
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

procesosModel.obtenerProcesosContrato = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_PROCESOS_CONTRATO(
                ${connection.escape(data.id_contrato)}
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

procesosModel.obtenerProcesosNoContrato = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_PROCESOS_NO_CONTRATO(
                ${connection.escape(data.id_contrato)}
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

procesosModel.registrarAnotacionHojaRuta = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_REGISTRAR_ANOTACION_HOJA_RUTA(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_etapa)},
                ${connection.escape(data.anotacion)},
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

procesosModel.registrarElementoListaProyecto = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_REGISTRAR_ELEMENTO_LISTA_PROYECTO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_elemento)},
                ${connection.escape(data.valor)},
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

module.exports = procesosModel;