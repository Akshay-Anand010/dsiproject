const express=require('express');
const path=require('path');
const app=express();

//set public folder
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3001

//load view engine

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
        res.render('login');
});

app.get('/home',function(req,res){
        res.render('content');
});



//start server
app.listen(port);