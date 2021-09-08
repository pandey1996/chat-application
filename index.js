const express=require('express');
const port=8080;
const app=express();
const expressLayouts=require('express-ejs-layouts');

app.use(express.urlencoded());
//Defining default Views
app.set('view engine','ejs');
app.set('views','./views');

// Defining default route
app.use('/',require('./routes/api/v1'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server running on ',port);
});

