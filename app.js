const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end("<h1>welcome to page </h1>")
    }
    if ( req.url === "/about"){
        return res.end(`<h2> this is about page </h2>`)
    }
    res.end("<h1>page not hound </h1>")
})

server.listen(3500)