const { ObjectId } = require('bson');
const db = require('../../config/mongodb');
const fs = require('fs');
const path = require('path');

const index =  (req, res) => {
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => (error));
}

const view =  (req, res) => {
    const {id} = req.params.id;
    db.collection('products').findOne({id})
    .then(result => res.send(result))
    .catch(error => (error));
}

const store =  (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
      
        fs.renameSync(image.path, target);
        db.collection('products').insertOne({users_id, name, price, stock, status, image_url: `localhost:3000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => (error));
    }
    }

    const update = (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const {id} = req.params.id;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
      
        fs.renameSync(image.path, target);
        db.collection('products').updateOne({id, name:name, price:price, stock:stock, status:status, image_url: `localhost:3000/public/${image.originalname}`})
        .then(result => res.send(result))
        .catch(error => (error));
    }
}
module.exports = { index, view, store, update }