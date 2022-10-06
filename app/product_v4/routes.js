const router = require('express').Router();
const productControler = require('./controler');

router.get('/product', productControler.index);
router.get('/product/:id', productControler.view);
router.post('/product', productControler.store);
router.put('/product/:id', productControler.update);
router.delete('/product/:id', productControler.deleteProduct);
module.exports = router;