const mongoose=require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/ChatAppDev');
}
mongoose.connection.once('open',function(){
    console.log('DB connnected');
});
module.exports=mongoose.connection;