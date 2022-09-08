const mongoose = require('mongoose');
mongoose.connect('mongodb://dandan:asdasdasd@localhost:27017/dandan-mongoose?authSource=admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors'));
db.once('open', () => console.log('server database terhubung oleh mongoose'));

