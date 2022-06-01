var event=require('events')
var http=require('http')
var eventEmitter=new event.EventEmitter();


//create event
var eventHandler=function(){
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('Hello Dinesh I am from event emitter');
        res.end();
    }).listen(8080);
}

//on the event
eventEmitter.on('Key-Dinesh',eventHandler);

//emit the event
eventEmitter.emit('Key-Dinesh');