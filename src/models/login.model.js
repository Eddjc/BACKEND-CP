const connection = require("../../connection");
let loginModel = {};

loginModel.login = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_LOGIN(
                ${connection.escape(data.correo)}
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

loginModel.cambiaContrasenia = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_CONTRASENIA(
                ${connection.escape(data.id_usuario)},
                ${connection.escape(data.contrasenia)},
                ${connection.escape(data.id_admin)}
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

loginModel.establecerSesion = (data, callback) => {
    if (connection) {
        
        try {
            const consulta = `
            CALL SP_REGISTRAR_INICIO_SESION(
                ${connection.escape(data.id)}
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

loginModel.obtenerPermisos = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_PERMISOS_USUARIO(
                ${connection.escape(data.id_rol)}
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
}

loginModel.logout = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_LOGOUT(
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

module.exports = loginModel;