var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/create', function(req, res, next) {
  var id = Math.round(Math.random()*100000);
  res.redirect('/chat/'+id);
});
router.get('/chat/:id',function(req,res,next){
	res.render('chat',{title: 'chat'});
});
module.exports = router;
