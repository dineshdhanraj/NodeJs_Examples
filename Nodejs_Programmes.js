var http=require('http')
var fs=require('fs');

    fs.unlink('Sample2.txt',function(err){
       if(err) throw err;
       console.log('Saved!');
    })
