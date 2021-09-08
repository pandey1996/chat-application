const express=require('express');
const router=express.Router();
const main=require('../../../controllers/api/v1/main');

router.get('/',main.main);

module.exports=router;