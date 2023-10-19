const express = require('express');
const { getAllDetails, createProduct, UpdateOneProduct, UpdateProduct , DeleteProduct, getCategoriedDetails, getOneProduct, SignUpUser} = require('../controller/detailsMange');
const router = express.Router();

router.route('/').get(getAllDetails);
router.route('/searchCategory').get(getCategoriedDetails);
router.route('/:id').get(getOneProduct);
router.route('/new').post(createProduct);
router.route('/updateone/:id').patch(UpdateOneProduct);
router.route('/update/:id').put(UpdateProduct);
router.route('/delete/:id').delete(DeleteProduct);
router.route('/signup').post(SignUpUser);


module.exports = router;