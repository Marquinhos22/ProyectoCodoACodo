//importo los modulos que necesito con require
const express = require('express');
const path = require('path');

//Rutas
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');


const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);


app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});