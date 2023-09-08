const connection = require("../../connection");
let reportesModel = {};

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

reportesModel.reporteGeneralRed = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_GENERAL_RED();
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

reportesModel.reporteSefin = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_VER_REPORTE_SEFIN()
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

reportesModel.reporteDiger = (data, callback) => {

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

reportesModel.crearUsuarioLogin = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_CREAR_USUARIO(
                ${connection.escape(data.dni)},
                ${connection.escape(data.nombre_usuario)},
                ${connection.escape(data.correo)},
                ${connection.escape(data.direccion)},
                ${connection.escape(data.telefono)},
                ${connection.escape(data.id_rol)},
                ${connection.escape(data.id_departamento)},
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.estado)},
                ${connection.escape(data.creado_por)}
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

module.exports = reportesModel;