const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =new mongoose.Schema({
    userName : {
        type : String,
        required : true 
    },
    userEmail : {
        type : String,
        required : true 
    },
    userPassword : {
        type : String,
        required : true 
    }
});

userSchema.methods.hachPassword = function(password){
    return bcrypt.hashSync(password , bcrypt.genSaltSync(5) , null)
}



// const sortUser = new mongoose.Schema({
//     red    : [{type : String}],
//     yellow : [{type : String}],
//     blue   : [{type : String}],
//     green  : [{type : String}],
//     white  : [{type : String}]
// });


module.exports = mongoose.model('user' , userSchema);
//module.exports = mongoose.model('sort' , sortUser);
// module.exports ={ mongoose:model('user' , userSchema) ,mongoose : model('sort',sortUser)}