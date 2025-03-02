const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
router.get('/add-product',(req,res,next)=>{
   // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button>Submit</button></form>');
   res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
    //res.redirect('/admin/product');  
});

// router.get('/',(req,res,next)=>{
//     console.log(req.body);
//     res.sendFile(path.join(__dirname,'../','views','home.html'));
//     //res.redirect('/admin/product');  
// });

module.exports = router;