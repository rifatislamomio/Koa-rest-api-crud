const { posts } = require('../Model/posts.model')


const getAPIHome = (ctx) => {
    ctx.body = {
        status: 200,
        message: "Hello from API home!"
    }
}

const getAllPosts = (ctx) => {
    ctx.body = {
        status: 200,
        posts: posts
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

module.exports.getAPIHome = getAPIHome;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostById = getPostById;
module.exports.addPost = addPost;