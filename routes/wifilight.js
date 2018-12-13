var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 

var app=express();
app.use(bodyParser.json());
router.post('/',function(req,res){
    let {on} = req.body;

})