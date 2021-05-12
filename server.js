// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const  serveStatic = require('serve-static')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const  history = require('connect-history-api-fallback')

const  port = process.env.PORT || 8080

const app = express()

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))
app.listen(port)
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
console.log('Server listening on port',port)
