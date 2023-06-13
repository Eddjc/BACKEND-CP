const connection = require("../../connection");
let portalModel = {};

portalModel.portalCiudadano = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_PORTAL_CIUDADANO();
            `;

            connection.query(consulta, (error, resultado) => {

                    if (error) {
                        console.log(error);
                    } else {
                        callback(null, resultado);
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

portalModel.obtenerAnexosPortal = (data, callback) => {
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

module.exports = portalModel;