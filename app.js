const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res, next) {
    res.render( __dirname + '/public/index.html' );
});
app.listen(3000);


