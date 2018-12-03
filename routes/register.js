var express = require('express');
var router = express.Router();
var model=require('../database/mongodb');
var bodyParser = require('body-parser');

var app=express();
app.use(bodyParser.json());

var user = model.getModel('user');

router.post('/',function(req, res, next){
    let {name,password,phone} = req.body;
    user.findOne({name:name},(err,data)=>{
        if(!data){
            new user({
                name: name,
                password: password,
                phone: phone
            }).save((err,data)=>{
                if(err){return console.log('入库错误')}
                else {
                    res.json({code:0,data:'已经保存注册信息'})
                }
            })
            
        }else{
            console.log(data)
            return res.json({code:1,data:'已经有相同用户名'})
        }
    })

})
module.exports = router;