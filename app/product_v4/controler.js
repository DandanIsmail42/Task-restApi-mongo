const Product = require('./model');
const fs = require('fs');
const path = require('path');


const index =  (req, res) => {
    Product.find()
    .then(result => res.send(result))
    .catch(error => (error));
}

const view =  (req, res) => {
    const {id} = req.params.id;
    Product.findOne({id})
    .then(result => res.send(result))
    .catch(error => (error));
}


const store = (req, res) => {
    const { name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
      
        fs.renameSync(image.path, target);
        Product.create({name, price, stock, status, image_url: `localhost:3000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => (error));
    }
}

const update = (req, res) => {
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
      
        fs.renameSync(image.path, target);
        Product.updateOne({_id: req.params.id}, {name: req.body.name,
         price: req.body.price,
         stock: req.body.stock,
         status: req.body.status,
        image_url: `localhost:3000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => (error));
    }
}

const deleteProduct = (req, res) => {
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
      
        fs.renameSync(image.path, target);
        Product.deleteOne({_id: req.params.id})
        .then(result => res.send(result))
        .catch(error => (error));
    }
}



module.exports = { store, index, view, update, deleteProduct }

