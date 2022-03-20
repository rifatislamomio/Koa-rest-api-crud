const Router = require('koa-router')
const router = new Router()
const { getAPIHome, getAllPosts, getPostById } = require('../Controllers/api.controller')

//Api home
router.get('/', getAPIHome);
//Get all posts
router.get('/posts', getAllPosts)
//Get post by id
router.get('/post/:id', getPostById)



module.exports = router