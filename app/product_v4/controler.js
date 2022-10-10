
const db = require('../../config/mongoose');

let messageDb = null;
(async () => {
    messageDb = (await db()).message;
})();

const index =  async (req, res) => {
   const messages = await messageDb.find();
   res.json(messages);
}

const view = async (req, res) => {
    const {id} = await req.params.id;
    const messages = await messageDb.findOne({id})
    res.json(messages);
}


const store = async (req, res) => {
    const messages = await messageDb.create({sender, receiver, content})
    res.json(messages);
}

const update = async (req, res) => {
    const messages = await messageDb.update({sender, receiver, content})
    res.json(messages);
}

const deleteProduct = async (req, res) => {
    const {id} = await req.params.id;
    const messages = await messageDb.delete({id})
    res.json(messages);
}



module.exports = { store, index, view, update, deleteProduct }

