const router=require('express').Router();

const startPage=require('./routes/startPage');
const prueba=require('./routes/openURL')

router.use('/prueba' , prueba)



module.exports=router;
