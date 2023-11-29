const authControllers = {
    loginG: (req, res) => {
        res.send('Esta ruta devuelve la vista de Login');
    },
    loginP: (req, res) => {
        res.send('Esta envia datos para el logueo');
    },
    registerG: (req, res) => {
        res.send('Esta ruta devuelve la vista de Registro a la page');
    },
    registerP: (req, res) => {
        res.send('Esta envia datos para el registro a la page');
    },
    logout: (req, res) => {
        res.send('Esta ruta devuelve la vista de deslogueo');
    }

}

module.exports = authControllers;