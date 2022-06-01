var express=require('express')
var app=express();

app.get('/things/*',function(req,res){
    res.send('Any url u search same output');
})

app.listen(8080);