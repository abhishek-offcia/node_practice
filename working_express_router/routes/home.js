const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views','home.html'));
    //res.redirect('/admin/product');  
});
module.exports = router;