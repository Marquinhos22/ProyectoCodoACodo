const shopControllers = {
    shop: (req, res) => (req, res) => {
        res.send('Esta ruta devuelve la vista de Shop');
    },
    itemID: (req, res) => {
        res.send(`Esta ruta devuelve el ID: ${req.params.id} del producto funko`);
    },
    itemIDAdd: (req, res) => {
        res.send(`Esta ruta agrega el ID: ${req.params.id} del producto funko `);
    },
    cartG: (req, res) => {
        res.send('Esta ruta devuelve la vista de Carrito');
    },
    cartP: (req, res) => {
        res.send('Esta ruta envia los datos de Carrito');
    }
}

module.exports = shopControllers;