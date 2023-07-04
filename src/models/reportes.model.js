const connection = require("../../connection");
let reportesModel = {};



reportesModel.reporteAMHON = (data, callback) => {

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

reportesModel.reporteUPEG = (data, callback) => {

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

reportesModel.reporteDIGER = (data, callback) => {

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

reportesModel.reporteGeneral = (data, callback) => {

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



reportesModel.reporteUPEG = (data, callback) => {

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

reportesModel.reporteContrato = (data, callback) => {

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

reportesModel.reporteOI = (data, callback) => {

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

reportesModel.reportePP = (data, callback) => {

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


reportesModel.reporteAR = (data, callback) => {

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

reportesModel.reporteConPro = (data, callback) => {

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

reportesModel.reporteSeguimiento = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_SEGUIMIENTOS_CP()
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

module.exports = reportesModel;