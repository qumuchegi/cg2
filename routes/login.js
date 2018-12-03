var express = require('express');
var router = express.Router();
var model=require('../database/mongodb');
var bodyParser = require('body-parser');
var async = require('async')

var app=express();
app.use(bodyParser.json());

var user = model.getModel('user');
var good = model.getModel('good');
var need = model.getModel('need');

router.post('/',function(req,res,next){
    let {name,password} = req.body

    let response = {}
    async.series([
        callback=>{
            user.findOne({name},(err,data)=>{
                if(data){
                    console.log('user',data)
                    if(data.password === password) {
                        response.user = data
                        console.log('登录成功')
                        callback()
                    }
                    else res.json({code:2,data:'密码错误'})
                }else  res.json({code:1,data:'还没有注册，请先注册！'})
            })
        },
        callback=>{
            good.find({},(err,data)=>{//为首页获取所有good,包括我的（登录者）
                response.good = data
                console.log('找good')
                console.log('good',data)
                callback()
            });
           
        },
        callback=>{
            need.find({},(err,data)=>{//为首页获取所有need,包括我的（登录者）
                response.need = data
                console.log('找need')
                callback()
            })
        },
    ]
    ,(err,result)=>{
        console.log('response',response)
        res.json({code:0,data:response})
    })
    
/*
    user.findOne({name},(err,data)=>{
        if(data){
            console.log('user',data)
            if(data.password === password){
                response.user = data
                console.log('登录成功')

                good.find({},(err,data)=>{
                    response.good = data
                })

                need.find({},(err,data)=>{
                    response.need = data
                })

                console.log('response',response)
                return res.json({code:0,data:response})
            }else{
                res.json({code:2,data:'密码错误'})
            }
        }else{
            res.json({code:1,data:'还没有注册，请先注册！'})
        }
    })*/
})
module.exports = router;
