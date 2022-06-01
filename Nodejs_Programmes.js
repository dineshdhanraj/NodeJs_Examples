var http=require('http')
var fs=require('fs');
http.createServer(function(req,res){
    fs.writeFile('Sample2.txt','Hello Dinesh I am WritingFile',function(err){
       if(err) throw err;
       console.log('Saved!');
    })
       
}).listen(8080);