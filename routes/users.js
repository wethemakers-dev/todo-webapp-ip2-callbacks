var express = require("express");
var router = express.Router();
const DB = require("../module/schemaData");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/singUp", (req, res, next) => {
  const uSchema = new DB.User({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    //password : req.body.password
    userPassword: new DB.User().hachPassword(req.body.userPassword)
  });

  DB.User.findOne({ userEmail: req.body.userEmail }, (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    if (result) {
      res.send("This Email is Exist");
      return;
    }
    uSchema.save((err, doc) => {
      if (err) {
        res.send(err);
        console.log(err);
        return;
      }
      console.log(doc);
      res.send(doc);
    });
  });
});

router.post("/login", (req, res) => {
  DB.User.findOne({ userEmail: req.body.userEmail }, (err, result) => {
    if (err) {
      console.log(err);
      res.send("your email not exist");
      return;
    }
    console.log(result);
    if (result) {
      const match = bcrypt.compareSync(
        req.body.userPassword,
        result.userPassword
      ); /////////// error here
      if (match) {
        console.log(result._id);
        // return res.redirect('todo/' + result._id);
        return res.send(result);
        
      } else {
        return res.send("password incorrect");
      }
    } else {
      res.send("Email Not Found");
      return;
    }
  });
});

module.exports = router;
