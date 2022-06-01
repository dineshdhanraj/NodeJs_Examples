var x=setTimeout(function(){console.log('I AM FROM TIMEOUT')},1000) 
clearTimeout(x);

console.log('I AM PRINING')

var x1=setImmediate(function(){console.log('I AM FROM IMMEDIATE')},1000) 
clearImmediate(x1);