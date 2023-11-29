const mainControllers = {
    home: (req, res) => {
        res.send('Esta ruta devuelve la vista de Home');
    },
    contact: (req, res) => {
        res.send('Esta ruta devuelve la vista de Contacto');
    },
    about: (req, res) => {
        res.send('Esta ruta devuelve la vista de About');
    },
    faqs: (req, res) => {
        res.send('Esta ruta devuelve la vista de Faqs');
    }

}

module.exports = mainControllers;