const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    profileImg:{
        type: String
    }
});

const User=mongoose.model('User',userSchema);
module.exports=User;