const productModel = require('../model/product.model');

const getAllproducts = async () => {
  return await productModel.getAll();
}

const getproduct = async (id) => {
  return await productModel.getOne({product_id: id});
}

const createproduct = async (product) => {
  
  /*
  const productSchema = {
    product_name: product.name,
    product_description: product.description,
    price: product.price,
    stock: product.stock,
    discount: product.discount,
    sku: product.sku,
    dues: product.dues,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: product.collection,
    category_id: product.category
  }
  */
  return await productModel.create(product);
}

const editproduct = async (product, id) => {
  const productSchema = {
    product_name: product.name,
    product_description: product.description,
    price: product.price,
    stock: product.stock,
    discount: product.discount,
    sku: product.sku,
    dues: product.dues,
    image_front: '/imagen_front',
    image_back: '/imagen_front',
    licence_id: product.collection,
    category_id: product.category
  }

  return await productModel.edit(productSchema, {product_id: id});
}

const deleteproduct = async (id) => {
  return await productModel.delete({product_id: id});
}

module.exports = {
  getAllproducts,
  getproduct,
  create: createproduct,
  edit: editproduct,
  delete: deleteproduct
}