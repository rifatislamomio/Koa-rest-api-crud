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

module.exports.getAPIHome = getAPIHome;
module.exports.getAllPosts = getAllPosts;
module.exports.getPostById = getPostById;