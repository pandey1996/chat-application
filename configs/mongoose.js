const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/chatApplication');

const db=mongoose.connection;

db.on('error', console.error.bind("EROROROROROAOSOASDOAS!!!!!!!"));
db.once('open',function(){
    console.log("Mongo Mongo bongo bongo !!!!!");
});

module.exports=db;