var express = require('express');
var router = express.Router();
const { newProduct, getAllProducts } = require("../controllers/productController.js")
const { addTocart, getCart, updateCart } = require("../controllers/cartController.js");



router.post('/newProduct', newProduct);

router.get('/getProducts', getAllProducts);

//Cart Routes

router.post('/addTocart', addTocart);
router.get('/getCart', getCart);
router.put('/updateCart', updateCart)

module.exports = router;