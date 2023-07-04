// Modelos requeridos
const bi = require('../models/bi.model');

// Exportar Rutas
module.exports = function(app, auth) {

    app.get('/obtener-url-bi', auth, (req, res) => {

        try {

            let parameters = req.query;

            console.log(req.query);

            const data = {
                id_usuario:  parameters.id_usuario
            };

            bi.obtenerURLBi(data, (error, resultado) => {
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
                        data: resultado
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
	
}