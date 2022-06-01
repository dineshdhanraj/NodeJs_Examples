var url=require('url')
var address='http://localhost:8080/default.htm?year=2017&month=february'
var breaker=url.parse(address,true)
console.log(breaker.host)
console.log(breaker.pathname)
console.log(breaker.search)
console.log(breaker.query)
console.log(breaker.query.month)
