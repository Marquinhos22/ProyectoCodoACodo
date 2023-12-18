const path = require('path');
const fs = require('fs');



module.exports ={
    home:(req, res)=> {
        res.render('index',{
            title : "HOME modificado",
            isLogged : true
        });
    },
    contact : (req, res)=>{
        res.render(path.resolve(__dirname, '../views/pages/shop/contact.ejs'))
    },
    about: (req, res)=> res.send('Esta es la vista Sobre Nosotros '),
    faqs: (req, res)=> res.send('Esta es la vista Preguntas Frecuentes')
}