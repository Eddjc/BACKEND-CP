const connection = require("../../connection");
let contratistasModel = {};

contratistasModel.insertarContratistas = (data, callback) => {
    if (connection) {
        console.log(data);
        try {
            
            const consulta = `
            CALL SP_INSERTAR_CONTRATISTA(
                ${connection.escape(data.contratista)},
                ${connection.escape(data.estado)},
                ${connection.escape(data.rtn)},
                ${connection.escape(data.nombre_representante_legal)},
                ${connection.escape(data.dni_representante_legal)},
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
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

contratistasModel.actualizarContratista = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_CONTRATISTA(
                ${connection.escape(data.id)},
                ${connection.escape(data.contratista)},
                ${connection.escape(data.estado)},
                ${connection.escape(data.rtn)},
                ${connection.escape(data.nombre_representante_legal)},
                ${connection.escape(data.dni_representante_legal)},
                ${connection.escape(data.modificado_por)}
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

contratistasModel.obtenerContratista = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_CONTRATISTA(
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

contratistasModel.obtenerProyectos_x_Contratistas = (data, callback) => {
    if (connection) {
        try {
            const consulta = `CALL SP_OBTENER_PROYECTOS_X_CONTRATISTA(
                ${connection.escape(data.id_contratista)}
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


contratistasModel.obtenerContratos_x_Contratistas = (data, callback) => {
    if (connection) {
        try {
            const consulta = `CALL SP_OBTENER_CONTRATOS_X_CONTRATISTA(
                ${connection.escape(data.id_contratista)}
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

contratistasModel.obtenerInformacionContratista = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_INFORMACION_CONTRATISTAS();
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

module.exports = contratistasModel;