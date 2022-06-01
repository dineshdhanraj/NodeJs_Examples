var express=require('express');
var route=express.Router();

route.get('/',function(req,res){
    res.send('I AM FROM GET METHODEXPRESSROUTE FILE');
})
route.post('/',function(res,req){
    res.send('I AM FROM POST METHOF FROM EXPRESSROUTE FILE');
})

module.exports=route;