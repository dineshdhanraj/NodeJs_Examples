var express=require('express');
var app=express();
var router=require('./ExpressRoute.js');
app.use('/routeData',router);
app.listen(3000);