// Modelos requeridos
const general = require('../models/general.model');
const manage = require('../utils/management');

// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/obtener-aldeas', auth, (req, res) => {

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

    app.get('/obtener-barrios', auth, (req, res) => {

        try {

            const params = req.query;
            const data = {
                id_caserio: params.id_caserio
            };

            general.obtenerBarrios(data, (error, resultado) => {
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
    
    app.get('/obtener-caserios', auth, (req, res) => {

        try {

            const params = req.query;
            const data = {
                id_aldea: params.id_aldea
            };

            general.obtenerCaserios(data, (error, resultado) => {
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

    app.get('/obtener-departamentos', auth, (req, res) => {

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
    
    app.get('/obtener-municipios', auth, (req, res) => {

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
    
    app.get('/obtener-tipos-actividades-agricolas', auth, (req, res) => {

        try {

            const data = {};

            general.obtenerTiposActividadesAgricolas(data, (error, resultado) => {
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

    app.get('/obtener-tipos-infraestructuras', auth, (req, res) => {

        try {

            const data = {};
            console.log('llega aqui');

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

    app.get('/obtener-roles', auth, (req, res) => {

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
}