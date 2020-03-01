const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  }
});

userSchema.methods.hachPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

const sortUser = new mongoose.Schema({
  task: String,
  label: String,
  user_id: String,
  created_at: { type: Date, default: new Date()},
  completed : { type : Boolean , default: true }
  // user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

// const sortUser = new mongoose.Schema({
//     red    : [{type : String}],
//     yellow : [{type : String}],
//     blue   : [{type : String}],
//     green  : [{type : String}],
//     white  : [{type : String}]
// });

module.exports.User = mongoose.model("User", userSchema);
module.exports.Sort = mongoose.model("Sort", sortUser);
// module.exports.intagration = mongoose.model("intagration", intagration);

