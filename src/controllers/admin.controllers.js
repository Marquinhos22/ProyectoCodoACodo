const path = require('path');



module.exports = {
    admin : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/admin.ejs'));
    },
    create : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/create.ejs'))
    },
    edit : (req, res) =>{
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'))
    }
}