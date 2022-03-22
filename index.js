const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const koaRouter = require('./Routes/api.routes')
const json = require('koa-json')
const PORT = process.env.PORT || 8080
const { getAPIHome } = require('./Controllers/api.controller')
const { loggerMiddleWare } = require('./Middlewares/logger.middleware')
const mongoInit = require('./DB/mongo.db')
//Database connection with mongoose
mongoInit()

app.use(koaBody())
app.use(json())
app.use(loggerMiddleWare)
app.use(koaRouter.routes())
app.use(getAPIHome) //Default route


app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})
