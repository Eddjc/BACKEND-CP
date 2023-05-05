const connection = require("../../connection");
let biModel = {};

biModel.obtenerURLBi = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_URL_BI(
                ${connection.escape(data.id)}
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

biModel.reporteAMHON = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_AMHON();
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

biModel.reporteUPEG = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_UPEG();
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

biModel.reporteDIGER = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_DIGER();
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

biModel.reporteGeneral = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_GENERAL();
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

biModel.reporteUPEG = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_UPEG();
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

biModel.reporteContrato = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_CONTRATO();
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

biModel.reporteOI = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_OI();
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

biModel.reportePP = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_PARTIDOS_POLITICOS()
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


biModel.reporteAR = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_ALDEAS_RED()
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

biModel.reporteConPro = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_CONTRATO_PROYECTOS()
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

module.exports = biModel;