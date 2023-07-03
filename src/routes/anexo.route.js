// modulos requeridos
const fs = require('fs');
const mime = require('mime-types');
const fileUpload = require('express-fileupload');
const processPath = require('../lib/path');
const moveFile = require('../lib/mv');

const multer  = require('multer');
const upload = multer({ dest: "/files" });

// Exportar Rutas
module.exports = function(app) {
  app.post('/test-upload', upload.single('file'), (req, res, next) => {
    
    const title = req.body.title;
    const file = req.file;

    res.sendStatus(200);
    
  });

  app.post('/directorio/:path?', async (req, res, next) => {
    const dirPath = processPath(req.params.path);
    const name = req.body.name;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'nombre no especificado',
      });
    }
  
    try {
      await fs.promises.mkdir(path.join(dirPath.absolutePath, name));
    } catch (e) {
      return next(e);
    }
  
    res.json({ success: true, message: 'Directorio creado' });
  });
    
    app.get('/descargar/:path', (req, res, err) => {
        try {
            const file = processPath(req.params.path).absolutePath;
            const mimetype = mime.lookup(file);
            res.setHeader('Content-Disposition', `attachment; filename=${file}`);
            res.setHeader('Content-Type', mimetype);
            res.download(file);
        } catch (err) {
            next(err);
        }
    });
    
    app.get('/contenido/:path?', async (req, res, next) => {
        try {
            const dirPath = processPath(req.params.path);
            const dir = await fs.promises.opendir(dirPath.absolutePath);
            const content = { files: [], directories: [] };
    
            for await (const dirent of dir) {
                if (dirent.isDirectory()) {
                    content.directories.push(dirent.name);
                } else {
                    content.files.push(dirent.name);
                }
            }
            content.directories.sort()
            content.files.sort()
    
            res.json({ path: dirPath.relativePath, content, success: true });
        }
        catch (err) {
            next(err);
        }
    });
    
    app.use(fileUpload());
    
    app.post('/subir/:path?', async (req, res, next) => {
      if (!req.files) {
        return res.status(400).json({
          success: false,
          message: 'No hay archivos subidos'
        });
      }
    
      const dirPath = processPath(req.params.path);
      let files = req.files.file;
      if (!Array.isArray(files)) {
        files = [files];
      }
    
      try {
        for (const file of files) {
          await moveFile(file, dirPath.absolutePath);
        }
      } catch (err) {
        // Sys error
        if (err.code) {
          return next(err);
        }
    
        return res.status(400).json({
          success: false,
          message: err.message,
          path: dirPath.relativePath
        });
      }
    
      res.json({
        success: true,
        message: 'Archivos subidos',
        path: dirPath.relativePath
      });
    });
}
