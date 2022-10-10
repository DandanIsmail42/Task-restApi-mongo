const router = require('express').Router();
const productControler = require('./controler');

router.get('/chatting', productControler.index);
router.get('/chatting/:id', productControler.view);
router.post('/chatting', productControler.store);
router.put('/chatting/:id', productControler.update);
router.delete('/chatting/:id', productControler.deleteProduct);
module.exports = router;