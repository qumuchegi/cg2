var express = require('express');
var router = express.Router();
var model=require('../database/mongodb');

var user = model.getModel('user');
var good = model.getModel('good');
var need = model.getModel('need');
 let resObj={};

router.get('/',(req,res)=>{
    user.find({},(err,data)=>{
        resObj.user = data
    }
    )
    good.find({},(err,data)=>{
        resObj.good = data
    }
    )
    need.find({},(err,data)=>{
        resObj.need = data
    }
    )

    res.json(resObj)

})
module.exports = router