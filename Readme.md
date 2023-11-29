## Comenzamos el proyecto
inicios el Package.json

```bash
  npm init -y
```
## 1er Paso Instalaciones 
### instalamos Express y nodemon 

```bash
  npm install express --save
```

### instalamos nodemon

```bash
  npm install -D nodemon 
```

### Configuramos el Package
Vamos a configurar como va arrancar nuestra applicacion, desde   npm run dev (nodemon)  y  npm start  ( node)
```bash
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "start": "node app.js"
  },
```

### Desde la terminal Arrancan con
Nodemon  : 
```bash
  npm run dev
```
Node: 
```bash
  npm start 
```


### Creamos Entry Point
Crear archivo app.js
## Servidor 
```bash
const express = require('express');
const app = express();
const PORT = 3000;




app.listen(PORT, () => {
    console.log(`El servidor esta corriendo el puerto 3000  http://localhost:${PORT}` )});
```
