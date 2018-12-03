var express = require('express');
var router = express.Router();
var model=require('../database/mongodb');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());

var user = model.getModel('user');
var good = model.getModel('good');
var need = model.getModel('need');

router.post('/',function(req,res,next){
    let {owner,name,price,discription} = req.body;
    new need({
        owner,name,price,discription
    }).save((err,data)=>{
        if(!err){
            return res.json({code:0,data:'已经成功发布需求'})
        }else{
            return res.json({code:1,data:'需求入库失败'})
        }
    })
})
module.exports = router;