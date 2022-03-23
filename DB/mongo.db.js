require('dotenv').config()
const mongoose = require('mongoose')

const init = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Connected to MongoDB server..."))
        .catch(err => console.log(err))
}
module.exports = init