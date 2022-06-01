var http=require('http')
var adder=require('./3rd Program File')
http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/num'});
        res.write(adder.add(5,10).toString());
       return res.end(); 
}).listen(8080);