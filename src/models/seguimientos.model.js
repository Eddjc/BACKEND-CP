const connection = require("../../connection");
let seguimientosModel = {};

seguimientosModel.asignarSupervisor = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_ASIGNAR_SUPERVISORES_PROYECTO(
                ${connection.escape(data.id_supervisor)},
                ${connection.escape(data.id_proyecto)},
                ${connection.escape(data.id_admin)}
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

seguimientosModel.obtenerFasesSeguimientos = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_FASES_SEGUIMIENTOS();
            `
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
    }
}

seguimientosModel.obtenerSupervisores = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_SUPERVISORES();
            `
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
    }
}

seguimientosModel.obtenerSupervisoresProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_SUPERVISORES_PROYECTOS(
                ${connection.escape(data.id_proyecto)}
            );
            `
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
    }
}

seguimientosModel.insertarSeguimiento = (data, callback) => {
    if (connection) {

        try {
            const consulta = `
            CALL SP_INSERTAR_SEGUIMIENTO(
                ${connection.escape(data.id_tipo_fase)},
                ${connection.escape(data.avance_fisico)},
                ${connection.escape(data.descripcion)}
                ${connection.escape(data.id_proyecto)}
                ${connection.escape(data.id_usuario)}
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
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

seguimientosModel.inactivarSupervisorProyecto = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_INACTIVAR_SUPERVISOR_PROYECTO(
                ${connection.escape(data.id_supervisor)},
                ${connection.escape(data.id_proyecto)},
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
            console.log(error);
            callback(error, null);
        }

    } else {
        callback("Connection not found", null);
    }
};

seguimientosModel.obtenerProyectosSupervisor = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_PROYECTOS_ASIGNADOS_SUPERVISORES(
                ${connection.escape(data.id_usuario)}
            );
            `
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
    }
}

seguimientosModel.obtenerUltimoSeguimiento = (data, callback) => {
    if (connection) {
        try {
            const consulta = `
            CALL SP_OBTENER_ULTIMO_SEGUIMIENTO(
                ${connection.escape(data.id_proyecto)}
            );
            `
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
    }
}


module.exports = seguimientosModel;