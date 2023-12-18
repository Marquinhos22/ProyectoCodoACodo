const path = require('path');
const fs = require('fs');

//empiezan datos de las card
const data = [
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 6,
    product_sku: "PKM001001",
    img_front: "/multimedia/pokemon/pidgeotto-1.webp",
    img_back: "/multimedia/pokemon/pidgeotto-box.webp"
    },
    {
        product_id: 2,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pikachu",
        product_description: "Figura coleccionable pokemon",
        product_price: 2500.99,
        dues: 6,
        product_sku: "PKM001001",
        img_front: "/multimedia/pokemon/pikachu-1.webp",
        img_back: "/multimedia/pokemon/pikachu-box.webp"
        },
        {
            product_id: 3,
            licence_name: "Star Wars",
            category_name: "Figuras coleccionables",
            product_name: "Baby Yoda",
            product_description: "Figura coleccionable pokemon",
            product_price: 2000.99,
            dues: 6,
            product_sku: "PKM001001",
            img_front: "/multimedia/star-wars/baby-yoda-1.webp",
            img_back: "/multimedia/star-wars/baby-yoda-box.webp"
            },
            {
                product_id: 4,
                licence_name: "Star Wars",
                category_name: "Figuras coleccionables",
                product_name: "Bobba Feth",
                product_description: "Figura coleccionable pokemon",
                product_price: 1500.99,
                dues: 6,
                product_sku: "PKM001001",
                img_front: "/multimedia/star-wars/bobbafeth-1.webp",
                img_back: "/multimedia/star-wars/bobbafeth-box.webp"
                },
                {
                    product_id: 5,
                    licence_name: "Harry Potter",
                    category_name: "Figuras coleccionables",
                    product_name: "Harry Potter",
                    product_description: "Figura coleccionable pokemon",
                    product_price: 1500.99,
                    dues: 6,
                    product_sku: "PKM001001",
                    img_front: "/multimedia/harry-potter/harry-1.webp",
                    img_back: "/multimedia/harry-potter/harry-box.webp"
                    },
                    {
                        product_id: 6,
                        licence_name: "Harry Potter",
                        category_name: "Figuras coleccionables",
                        product_name: "Hermione",
                        product_description: "Figura coleccionable pokemon",
                        product_price: 1500.99,
                        dues: 6,
                        product_sku: "PKM001001",
                        img_front: "/multimedia/harry-potter/hermione-1.webp",
                        img_back: "/multimedia/harry-potter/hermione-box.webp"
                        },
                        {
                            product_id: 7,
                            licence_name: "Harry Potter",
                            category_name: "Figuras coleccionables",
                            product_name: "Luna",
                            product_description: "Figura coleccionable pokemon",
                            product_price: 3500.99,
                            dues: 6,
                            product_sku: "PKM001001",
                            img_front: "/multimedia/harry-potter/luna-1.webp",
                            img_back: "/multimedia/harry-potter/luna-box.webp"
                            },
                            {
                                product_id: 8,
                                licence_name: "Harry Potter",
                                category_name: "Figuras coleccionables",
                                product_name: "Snape Patronus",
                                product_description: "Figura coleccionable pokemon",
                                product_price: 1500.99,
                                dues: 6,
                                product_sku: "PKM001001",
                                img_front: "/multimedia/harry-potter/snape-patronus-1.webp",
                                img_back: "/multimedia/harry-potter/snape-patronus-box.webp"
                                },
                                {
                                    product_id: 9,
                                    licence_name: "Star Wars",
                                    category_name: "Figuras coleccionables",
                                    product_name: "Luke",
                                    product_description: "Figura coleccionable pokemon",
                                    product_price: 1500.99,
                                    dues: 6,
                                    product_sku: "PKM001001",
                                    img_front: "/multimedia/star-wars/luke-1.webp",
                                    img_back: "/multimedia/star-wars/luke-box.webp"
                                    }
    ];

module.exports = {
    shop : (req, res) =>{

         res.render(path.resolve(__dirname, '../views/pages/shop/shop.ejs'),{
            data  
        })
    },
    item : (req, res)=>{
        const itemId = req.params.id;
        const item = data.find(item => item.product_id == itemId);
        res.render(path.resolve(__dirname, '../views/pages/shop/item.ejs'),{
            item
        });
    },
    carrito : (req, res)=>{
        res.render(path.resolve(__dirname, '../views/pages/shop/carrito.ejs'));
    },
    

}