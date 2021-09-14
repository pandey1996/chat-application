const messagesDB=require('../../../models/messages');
const userDB=require('../../../models/user');

module.exports.main=function(req,res){
    return res.render('home');
}

module.exports.send=async function(req, res){
    if(req.query.sender==null || req.query.receiver==null || req.query.message==null )
        return res.json(404,{error: 'Bad Input'});
    else{
        try{
            await messagesDB.create({
                sender: req.query.sender,
                receiver: req.query.receiver,
                message: req.query.message
            });
            return res.json(200, {success: 'Message Sent'});
        }
        catch(err){
            return res.json(404,{error: err});
        }
    }
}

module.exports.fetch=async function(req, res){
    //console.log(req);
    if(req.query.receiver==null){
        return res.json(404,{error: 'Bad Input'});
    }
    else{
        try{
            let messages=await messagesDB.find({receiver: req.query.receiver});
            return res.json(200, messages);
        }
        catch(err){
            return res.json(404,{error: err});
        }
    }
}

module.exports.addUser=function(req, res){
    console.log(req.query);
    userDB.create({
        name: req.query.name,
        mobile: req.query.mobile
    }, function(err){
        if(err){
            console.log('alo',err);
            return res.status(404).json({error: 'Bad Input'});
        }
        return res.json(200,{success: 'Works'});
    });
        
}