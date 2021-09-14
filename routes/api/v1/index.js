const express=require('express');
const router=express.Router();
const main=require('../../../controllers/api/v1/main');

router.get('/',main.main);
router.post('/send',main.send);
router.post('/fetch',main.fetch);
router.get('/addUser',main.addUser);

module.exports=router;