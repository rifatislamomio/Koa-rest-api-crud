const Koa = require('koa')
const koaBody = require('koa-body')
const koaRouter = require('./Routes/api.routes')
const json = require('koa-json')
const config = require('./config.json')
const { getAPIHome } = require('./Controllers/api.controller')
const { loggerMiddleWare } = require('./Middlewares/logger.middleware')
const mongoInit = require('./DB/mongo.db')
const PORT = config.app.port

//Database connection with mongoose
mongoInit()

const app = new Koa()
app.use(koaBody())
app.use(json())
app.use(loggerMiddleWare)
app.use(koaRouter.routes())
app.use(getAPIHome) //Default route

app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})