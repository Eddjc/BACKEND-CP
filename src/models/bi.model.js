const connection = require("../../connection");
let biModel = {};


biModel.obtenerURLBi = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_BI(
                ${connection.escape(data.id_usuario)}
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

module.exports = biModel;