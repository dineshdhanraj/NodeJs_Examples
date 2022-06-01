var fs=require('fs')
var data='';
var readerStream=fs.createReadStream('Sample.txt')

//For Reader -> DATA, END, ERROR (3 TOTAL)
readerStream.setEncoding('UTF8')
readerStream.on('data',function(chunk){
    data+=chunk;
    console.log(chunk);
})
readerStream.on('end',function(){console.log(data)})
readerStream.on('error',function(err){
    console.log(err.stack);
})
console.log('Program Ended')




var writerStream=fs.createWriteStream('Sample.txt')
//For wRITE -> fINISH, ERROR (2 TOTAL)
writerStream.write(data,'UTF8')
writerStream.on('finish',function(){
    console.log('COMPLETED')
})
writerStream.on('error',function(err){
console.log(err.stack)
})
console.log('Writer program ended')

