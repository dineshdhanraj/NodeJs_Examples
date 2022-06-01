var http=require('http')
var fs=require('fs');
http.createServer(function(req,res){
    fs.open('Sample2.txt','a',function(err){
       if(err) throw err;
       console.log('Saved!');
    })
       
}).listen(8080);