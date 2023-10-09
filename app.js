const http = require('http')
const routing = require('./routing')

const app = require('./server')

const server = http.createServer(app)
    // const server = http.createServer(routing)

server.listen(3001, '127.0.0.1', () => {
    console.log('server runing..');
})