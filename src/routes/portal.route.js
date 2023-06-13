// Modelos requeridos
const portal = require('../models/portal.model');
const manage = require('../utils/management');

// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/portal-ciudadano', (req, res) => {

        try {

            const data = {};

            portal.portalCiudadano(data, (error, resultado) => {
                if (error) {
                    res.status(200).json({
                        status: 'fallido',
                        message: error,
                        data: null
                    });
                } else {

                    res.status(200).json({
                        status: 'exito',
                        message: error,
                        data: resultado[0]
                    });
                }
            });
        } catch (error) {
            res.status(200).json({
                status: 'fallido',
                message: error,
                data: null
            });
        }

    });


    app.get('/listar-anexos', (req, res) => {
        try {
            const parametros = req.query;
            const data = {
                id_referencia: parametros.id_referencia,
                id_tipo_referencia: parametros.id_tipo_referencia
            };

            portal.obtenerAnexosPortal(data, (error, resultado) => {
                if (error) {
                    manage.returnError(error, res);
                } else {
                    manage.returnSuccess('', resultado, res);
                }
            });
        } catch (error) {
            manage.returnError(error, res);
        }
    });
  

}