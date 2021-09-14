const mongoose=require('mongoose');

const messagesSchema=new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
});
messagesSchema.index({createdAt: 1},{expireAfterSeconds: 216000});
const Messages=mongoose.model('Messages',messagesSchema);
module.exports=Messages;