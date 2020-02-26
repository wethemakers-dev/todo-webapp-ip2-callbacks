var express = require('express');
var router = express.Router();
const DB = require('../module/schemaData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/app' , (req , res , next) => {
 
const {red , yellow , green } = req.body ;

  const sortU = new DB.Catg({
    red   ,
    yellow :  req.body.yellow,
    blue   :  req.body.blue,
    green  :  req.body.green,
    white  :  req.body.white,
  });

  sortU.save((err , doc) =>{
    if(err)throw(err)
    res.send(doc);
  });

})





module.exports = router;
