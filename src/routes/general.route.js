// Modelos requeridos
const general = require('../models/general.model');
const manage = require('../utils/management');

// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/obtener-aldeas',  (req, res) => {

        try {

            const params = req.query;
            const data = {
                id_municipio: params.id_municipio
            };

            general.obtenerAldeas(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-departamentos',  (req, res) => {

        try {

            const data = {};

            general.obtenerDepartamentos(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });
    
    app.get('/obtener-municipios',  (req, res) => {

        try {
            const data = req.query;            
            general.obtenerMunicipios(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }

    });
    
    app.get('/obtener-tipos-actividades-economicas',  (req, res) => {

        try {

            const data = {};

            general.obtenerTiposActividadesEconomicas(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-tipos-infraestructuras',  (req, res) => {

        try {

            const data = {};

            general.obtenerTiposInfraestructuras(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-roles',  (req, res) => {

        try {

            const data = {};

            general.obtenerRoles(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    app.get('/obtener-estados', auth, (req, res) => {

        try {

            const data = {};

            general.obtenerEstados(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess(error, resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });

    
}
