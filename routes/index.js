var express = require('express');
var router = express.Router();

/* GET home page. */
//其实在云服务器上已经访问不到这个路由了，
//因为在云武器上配置的nginx的缘故，
//只要访问chegi.xyz/就默认访问位于nginx的build中的react app的inbdex.html
//
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
module.exports = router;

