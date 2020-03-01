var express = require('express');
var router = express.Router();
const DB = require('../module/schemaData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/app' , (req , res , next) => {
  // console.log(req.params);
    const sortU = new DB.Sort({
      task    :  req.body.task,
      label : req.body.label,
      user_id: req.body.id
    });
  
    console.log("this is" + sortU);
     
    sortU.save((err , doc) =>{
      if(err)throw(err)
      res.send(doc);
    });
  })
  
  router.get('/todo' , (req , res , next ) => {
    console.log(req.body.id);
  
   DB.Sort.find({user_id : req.body.id} , (err , result) => {
     console.log(req.body.id);
     
    if(err)throw(err); 
    console.log(result)
    res.send(result);
   });
  })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  router.post('/copmleted' , (req , res ) => {
  
    DB.Sort.replaceOne({completed : req.body.boolean} , (err , result) => {
     if(err)throw(err); 
     console.log(result)
     // DB.Sort.completed.type.boolean.convertToFalse 
     res.send(result);
    });
   })


  router.get('/copmleted' , (req , res ) => {
  
   DB.Sort.find({completed : req.body.false} , (err , result) => {
    if(err)throw(err); 
    console.log(result)
    // DB.Sort.completed.type.boolean.convertToFalse 
    res.send(result);
   });
  })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/delete' , (req,res) => {        // must were i have a delete form from front-end
  DB.Sort.findByIdAndDelete({_id : req.body.id  } , (err , result) =>{
    if(err)throw(err);
    res.send(result);
  });
  });
  

  //////////////////////////////////////////
  /////////////////////////////////////////


router.get('/search' , (req,res) => {
  DB.Sort.find({$or : [{task : req.body.search} ,{ label : req.body.search }]}, (err , result) => {
    console.log(result);
    if(err)throw(err);
    if(result){
      res.send(result);
    }
  })
})



















module.exports = router;
