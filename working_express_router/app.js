const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin');
const homeRouter = require('./routes/home');
// const shopRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/admin',shopRouter);
app.use(homeRouter);
app.use('/admin',adminRouter);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen(3000);