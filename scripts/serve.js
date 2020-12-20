const http = require('http')
const app = require('./routes/api')

const server = http.createServer(app)

server.listen(8124, () => {
  console.log('server start at http://127.0.0.1:8124')
})
