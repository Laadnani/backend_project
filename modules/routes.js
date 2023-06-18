const {Router} = require ('express');
const controllers = require ('./controler');




const router = Router();

router.get('/customers', controllers.getCustomers );

router.get("/orders", controllers.getOrders);

router.get('/products', controllers.getProducts);



module.exports = router;