const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product', (req, res, next) => {  // Fixed parameter order here
    console.log('In the middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Submit</button></form>');
   // next(); // Note: sending response and calling next() will cause an error
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>This is Home page</h1>');
});

app.listen(3000);