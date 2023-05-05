const connection = require("../../connection");
let contratosModel = {};

contratosModel.insertarContrato = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_INSERTAR_CONTRATO(
                ${connection.escape(data.correlativo_contrato)},
                ${connection.escape(data.nombre_contrato)},
                ${connection.escape(data.firmante)},
                ${connection.escape(data.fecha_firma)},
                ${connection.escape(data.duracion_contrato)},
                ${connection.escape(data.firmado)},
                ${connection.escape(data.monto_total)},
                ${connection.escape(data.monto_presupuestado)},
                ${connection.escape(data.detalles)},
                ${connection.escape(data.id_contratista)},
                ${connection.escape(data.id_institucion)},
                ${connection.escape(data.id_admin)}
            ); `;

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

contratosModel.actualizarContrato = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_ACTUALIZAR_CONTRATO(
                ${connection.escape(data.id)},
                ${connection.escape(data.correlativo_contrato)},
                ${connection.escape(data.nombre_contrato)},
                ${connection.escape(data.firmante)},
                ${connection.escape(data.fecha_firma)},
                ${connection.escape(data.duracion_contrato)},
                ${connection.escape(data.firmado)},
                ${connection.escape(data.monto_total)},
                ${connection.escape(data.monto_presupuestado)},
                ${connection.escape(data.detalles)},
                ${connection.escape(data.id_contratista)},
                ${connection.escape(data.id_institucion)},
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

contratosModel.asignarContratoProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_ASIGNAR_PROYECTO_CONTRATO(
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_contrato)},
                ${connection.escape(data.id_admin)}
            ); `;

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

contratosModel.obtenerContrato = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_CONTRATO(
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
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

contratosModel.obtenerContratos = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_CONTRATOS();
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
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

contratosModel.obtenerInformacionContratos = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_INFORMACION_CONTRATOS();
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
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

contratosModel.obtenerProyectosDelContrato = (data, callback) => {
    if (connection) {
   
        try {
            const consulta = `CALL SP_OBTENER_PROYECTOS_DE_CONTRATO(
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

module.exports = contratosModel;