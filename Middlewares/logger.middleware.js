const fs = require('fs')
const logger = async (ctx, next) => {
    const log = {
        ip: ctx.request.ip,
        method: ctx.method,
        url: ctx.url,
        origin: ctx.origin,
        time: (new Date()).toLocaleTimeString(),
        date: (new Date()).toLocaleDateString()
    }
    const logMessage = `Date: ${log.date} Time: ${log.time} From: ${log.ip} method: ${log.method} url: ${log.url} origin: ${log.origin} \n`

    // console.log(logMessage)

    //Saving logs to a file
    fs.appendFile('logs.txt', logMessage, (err) => {
        if (err) throw err;
    })
    await next();
}

module.exports.loggerMiddleWare = logger;