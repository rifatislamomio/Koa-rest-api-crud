const { posts } = require('../Model/posts.model')
const fs = require('fs');
const postSchema = require('../Model/postsdb.model')
const mongoose = require('mongoose')
const postModel = new mongoose.model("Post", postSchema); //ODM

const getAPIHome = (ctx) => {
    ctx.body = {
        status: 200,
        message: "Redirected to API home!"
    }
}

const getAllPosts = (ctx) => {
    const max = parseInt(ctx.request.query.max) //Max (n) numbers of posts
    if (max) {
        ctx.body = {
            status: 200,
            posts: posts.slice(0, max)
        }
    } else {
        ctx.body = {
            status: 200,
            posts: posts
        }
    }
}

const getAllPostsFromDb = async (ctx) => {
    var max = parseInt(ctx.request.query.max)  //Max (n) numbers of posts
    max = max ? max : 0
    var data = await postModel.find({}).limit(max)
        .then(data => {
            return data
        })
        .catch(error => {
            console.log(error)
        })
    ctx.status = 200
    ctx.body = {
        status: 200,
        posts: data
    }
}

const getPostById = (ctx) => {
    const id = parseInt(ctx.request.params.id)
    var post = posts.filter(post => post.id === id)
    if (post) {
        ctx.body = {
            status: 200,
            posts: post,
            message: 'Success'
        }
    }
    else {
        ctx.body = {
            status: 404,
            posts: [],
            message: 'Not found'
        }
    }
}

const addPost = (ctx) => {
    var post = ctx.request.body
    post.id = posts[posts.length - 1].id + 1
    posts.push(post)
    ctx.body = {
        message: "Success",
        status: 201,
        post
    }
}

const addPostToDb = async (ctx) => {
    try {
        const post = await postModel.create(ctx.request.body)
        ctx.body = {
            message: "Success",
            status: 201,
            post
        }
    } catch (error) {
        ctx.body = {
            message: "Failed",
            status: 408,
        }
        console.log(error)
    }
}

const deleteById = (ctx) => {
    const id = parseInt(ctx.request.params.id)
    let index = posts.findIndex(post => { return post.id == id })

    if (index != -1) {
        posts.splice(index, 1) //deleteing from array
        ctx.body = {
            message: "Success",
            status: 201
        }
    }
    else {
        ctx.body = {
            status: 404,
            message: 'Failed to delete'
        }
    }
}

const deleteByIdInDb = async (ctx) => {
    const id = ctx.request.params.id
    try {
        await postModel.deleteOne({ _id: id })
        ctx.body = {
            message: "Success",
            status: 202
        }
    } catch (error) {
        ctx.body = {
            status: 404,
            message: 'Failed to delete'
        }
    }
}

const updateById = (ctx) => {
    const id = parseInt(ctx.request.params.id)
    let index = posts.findIndex(post => { return post.id == id })
    if (index != -1) {
        let body = ctx.request.body
        posts[index].body = body.body ? body.body : posts[index].body;
        posts[index].title = body.title ? body.title : posts[index].title;

        ctx.body = {
            message: "Success",
            status: 204,
            post: posts[index]
        }
    }
    else {
        ctx.body = {
            status: 404,
            message: 'Failed to update'
        }
    }
}

const getVideoStream = (ctx) => {
    const fileStream = fs.createReadStream("video_file.mp4")
    ctx.body = fileStream
}

module.exports.getAPIHome = getAPIHome;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostById = getPostById;
module.exports.addPost = addPost;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.getVideoStream = getVideoStream;

module.exports.addPostToDb = addPostToDb;
module.exports.getAllPostsFromDb = getAllPostsFromDb;
module.exports.deleteByIdInDb = deleteByIdInDb;