//importo los modulos que necesito con require
const express = require('express');
const path = require('path');
/*
//Rutas
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
*/

const app = express();
const PORT = 3000;

// Configuracion ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/src/views"));

/*
//Para navegar con los links estaticos
app.use(express.static('public'));

//Para navegar a traves de peticiones url
app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);
*/
//Para probar EJS
const router = express.Router();
router.get('/',(req,res) => res.render('index'));

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});

module.exports = router;    