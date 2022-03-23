require('dotenv').config()
const mongoose = require('mongoose')
const config = require('../config.json')

const init = () => {
    mongoose.connect(config.db.URL)
        .then(() => console.log("Connected to MongoDB server..."))
        .catch(err => console.log(err))
}
module.exports = init