const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ershou',{useNewUrlParser:true},err=>console.log(err)  )

mongoose.model('user', new mongoose.Schema({
    name : String, //姓名
    password : String, //密码
    phone : String,    //手机
    myPubGoods : Array,//发布货物ID
    myApplyGoods : Array//需求货物ID
}))
mongoose.model('good', new mongoose.Schema({
    owner:Object,//{name,phone} 卖方名字和手机
    name:String, //货物名称
    price:String, //价格
    discription:String, //介绍
    deadline:String,//截止日
    remarks:Array //评论
}))
mongoose.model('need',new mongoose.Schema({
    owner:Object,//{name,phone} 需求方名字和手机
    name:String, //需求货物名称
    price:String, //接受价格
    discription:String, //需求货物要求
}))
 
module.exports = {
    getModel:function(modelname){
        return mongoose.model(modelname)
    }
} 