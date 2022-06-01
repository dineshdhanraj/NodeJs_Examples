var http=require('http')
var fs=require('fs');
http.createServer(function(req,res){
    fs.appendFile('Sample.txt','Hello Dinesh I am Appedning',function(err){
       if(err) throw err;
       console.log('Saved!');
    })
       
}).listen(8080);