const express = require('express');
const app = express();
const methodOverride = require('method-override');

/** ROUTES IMPORT */
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');
const path = require('path');

const PORT = 3004;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));



app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin',adminRoutes)
app.use('/auth', authRoutes)

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded());
app.use(express.json())
app.listen(PORT, ()=> console.log(`Servidor corriendo en ⚡ http://localhost:${PORT}`))
