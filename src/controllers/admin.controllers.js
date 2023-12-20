const path = require('path');
const productService = require('../services/product.service');


module.exports = {
    admin : async (req, res) =>{
        const products = await productService.getAllproducts();
        const { data } = products; 
        res.render(path.resolve(__dirname, '../views/pages/admin/admin.ejs'),{
            view: {
                title: "Admin | Funkoshop"
            },
            items: data,
        });
    },
    create : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/create.ejs'))
    },
    createItem: async (req, res) =>{

        const product_schema = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category)

        }

        //console.log("array: ",[Object.values(product_schema)]);
        const result = await productService.create([Object.values(product_schema)]);
        //console.log(result);

        alert('Se hacreado correctamente el Item!');
        res.redirect('/admin');
    },
    edit : async (req, res) =>{
        const productId = req.params.id;
        const product = await productService.getproduct(productId);
        const { data } = product;

        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'),{
            view: {
                title: "Edit Funko"
            },
            product: data[0]
        })
    }
}