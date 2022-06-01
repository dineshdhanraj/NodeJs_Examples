var express=require('express');
var app=express();
app.get('/sukesh',function(req,res){
    res.send('hello world')
})
app.listen(8080);