const connection = require("../../connection");
let usuariosModel = {};

usuariosModel.actualizarUsuario = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_USUARIO(
                ${connection.escape(data.id_usuario)},
                ${connection.escape(data.nombre)},
                ${connection.escape(data.telefono)},
                ${connection.escape(data.direccion)},
                ${connection.escape(data.correo)},
                ${connection.escape(data.dni)},
                ${connection.escape(data.id_departamento)},
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.id_organizacion)},
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

usuariosModel.cambiarContrasenia = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_ACTUALIZAR_CONTRASENIA(
                ${connection.escape(data.id_usuario)},
                ${connection.escape(data.contrasenia)},
                ${connection.escape(data.id_admin)}
            );
            `;``

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

usuariosModel.crearUsuario = (data, callback) => {

    if (connection) {

        try {
            const consulta = `
            CALL SP_CREAR_USUARIO(
                ${connection.escape(data.contrasenia)},
                ${connection.escape(data.telefono)},
                ${connection.escape(data.correo)},
                ${connection.escape(data.direccion)},
                ${connection.escape(data.dni)},
                ${connection.escape(data.nombre)},
                ${connection.escape(data.id_departamento)},
                ${connection.escape(data.id_municipio)},
                ${connection.escape(data.id_organizacion)},
                ${connection.escape(data.id_institucion)},
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

usuariosModel.detalleUsuario = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_DETALLE_USUARIO(
                ${connection.escape(data.id_usuario)}
            );
            `;

            connection.query(consulta, (error, resultado) => {

                    if (error) {
                        console.log(error);
                    } else {
                        callback(null, resultado[0][0]);
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

usuariosModel.inhabilitarUsuario = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INACTIVAR_USUARIO(
                ${connection.escape(data.id_usuario)},
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

usuariosModel.obtenerUsuarios = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_OBTENER_USUARIOS();
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
}

module.exports = usuariosModel;