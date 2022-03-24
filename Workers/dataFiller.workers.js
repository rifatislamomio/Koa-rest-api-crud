const mongoose = require('mongoose')
const mongoInit = require('../DB/mongo.db')
const postSchema = require('../Model/postsdb.model')
const postModel = new mongoose.model("Post", postSchema);
mongoInit()
const { workerData } = require('worker_threads')

const mockData = [
    {
        "title": "sunt aut facere repellat excepturi optio reprehenderit",
        "body": "quia et susciptrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "title": "qui est esse",
        "body": "est rerum tempore vitae blanditiis voluptate porro vel nihil molestiaeui neque nisi nulla"
    }
]

try {
    postModel.find({}).limit(1)
        .then(posts => {
            if (posts.length == 0) {
                postModel.insertMany(mockData)
                    .then((data) => {
                        console.log("Mock data inserted!!!")
                    })
                    .catch((error) => { console.log(error) })
            }
        })
} catch (error) {
    console.log(error);
}

