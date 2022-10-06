const mongoose = require('mongoose');
const database = process.env.MONGO_URI || 'mongodb://ismail:ismail@localhost:27017/dandan-native?authSource=admin'
mongoose.connect(database, {useUnifiedTopology: true,
useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors'));
db.once('open', () => console.log('server database terhubung oleh mongoose'));

