const connection = require("../../connection");
let generalModel = {};

generalModel.obtenerAldeas = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ALDEAS(${connection.escape(data.id_municipio)});
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

generalModel.obtenerBarrios = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_BARRIOS(${connection.escape(data.id_caserio)});
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

generalModel.obtenerCaserios = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_CASERIOS(${connection.escape(data.id_aldea)});
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

generalModel.obtenerDepartamentos = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_DEPARTAMENTOS();
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

generalModel.obtenerMunicipios = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_MUNICIPIOS(
                ${connection.escape(data.id_departamento)}
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

generalModel.obtenerTiposActividadesEconomicas = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ACTIVIDADES_ECONOMICAS;
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

generalModel.obtenerTiposInfraestructuras = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_TIPOS_INFRAESTRUCTURAS();
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

generalModel.obtenerRoles = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ROLES();
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

generalModel.obtenerEstados = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_ESTADOS();
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


module.exports = generalModel;