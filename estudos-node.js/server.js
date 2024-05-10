var http = require('http')
http.createServer(function(re1,res){
    res.end("Hello world, welcome my server")
}).listen(8081)
console.groupCollapsed("O Server está funcionando!")
