const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-body')
const koaRouter = require('./Routes/api.routes')
const json = require('koa-json')
const PORT = process.env.PORT || 8080
require('dotenv').config()

app.use(json())
app.use(bodyParser())
app.use(koaRouter.routes())



app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})
