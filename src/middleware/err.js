const err = (err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
      message: "No autorizado",
      success: false
    });
  };
  
  module.exports = err;