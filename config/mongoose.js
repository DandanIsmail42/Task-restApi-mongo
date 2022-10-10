const mongoose = require('mongoose');


const database = async () => {
    await mongoose.connect(
        "mongodb+srv://Dandan:G70EGfsfymrIekCg@nodejs.kx2geeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const messageSchema = new mongoose.Schema({
        sender: String,
        receiver: String,
        content: String,
    });
    const message = mongoose.model("message", messageSchema);
    return { message };
};

module.exports = database;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection errors'));
// db.once('open', () => console.log('server database terhubung oleh mongoose'));

// 'mongodb://ismail:ismail@localhost:27017/?authSource=admin'
// qUh6TiI9aV6DmE3f