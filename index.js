const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const koaRouter = require('./Routes/api.routes')
const json = require('koa-json')
const PORT = process.env.PORT || 8080
require('dotenv').config()
const { getAPIHome } = require('./Controllers/api.controller')
const { loggerMiddleWare } = require('./Middlewares/looger.middleware')
const mongoose = require('mongoose')

//Database connection with mongoose
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.use(koaBody())
app.use(json())
app.use(loggerMiddleWare)
app.use(koaRouter.routes())
app.use(getAPIHome) //Default route


app.listen(PORT, () => {
    console.log(`Listening to: http://localhost:${PORT}`)
})
