const http = require("http")
const hostName = "localhost"
const port = 3001

const server = http.createServer((req, res) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader("content-type", "text/html")
  res.end("<html><body><h1>Hello world</h1></body></html>")
})
server.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}`)
})
