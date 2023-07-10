const connection = require("../../connection");
let portalModel = {};

portalModel.obtenerAnexosPortal = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ANEXOS_PORTAL(
                ${connection.escape(data.id_referencia)}
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

portalModel.reportePorUsuario = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_REPORTE_X_USUARIO (
                ${connection.escape(data.id_usuario)}
            );
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

module.exports = portalModel;