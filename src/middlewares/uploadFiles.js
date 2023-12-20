const multer = require('multer');
const path = require('path');

//creamos la configuracion de multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null,path.resolve(__dirname,'../../public/img/')),
    filename: (req,file,cb) => cb(null,`${file.originalname}`)   
});

//usamos la configuracion recien creada
const upload = multer({storage});

module.exports = upload;