const adminControllers = {
    admin: (req, res) => {
        res.send('Esta ruta devuelve la vista de Admin');
    },
    createG: (req, res) => {
        res.send('Esta ruta devuelve la vista de creacion de un user');
    },
    createP: (req, res) => {
        res.send('Esta ruta envia los datos para la creacion de un user');
    },
    editIDG: (req, res) => {
        res.send(`Esta ruta devuelve la vista del user ID: ${req.params.id}`);
    },
    editIDPU: (req, res) => {
        res.send(`Esta ruta actualiza los datos del user ID: ${req.params.id}`);
    },
    deleteID: (req, res) => {
        res.send(`Esta ruta elimina el user ID: ${req.params.id}`);
    }

}

module.exports = adminControllers;