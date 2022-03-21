const fs = require('fs')
var path = require("path")
var target = "../Logs/"
var resolved = path.relative(__dirname, target)
const logger = (ctx, next) => {
    const log = {
        method: ctx.method,
        url: ctx.url,
        origin: ctx.origin,
        time: (new Date()).toLocaleTimeString(),
        date: (new Date()).toLocaleDateString()
    }
    const logMessage = `Date: ${log.date} Time: ${log.time} method: ${log.method} url: ${log.url} origin: ${log.origin} \n`

    //Saving logs to a file
    fs.appendFile(path.join(resolved,'logs.txt'), logMessage, (err) => {
        if (err) throw err;
    })
    next();
}

module.exports.loggerMiddleWare = logger;