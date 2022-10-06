const {MongoClient} = require('mongodb');
const url = 'mongodb://ismail:ismail@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try{
        await client.connect();
        console.log('Berhasil connect ke mongodb');
    } catch (e) {
        console.log(e);
    }
})();

const db = client.db('admin');

module.exports = db;