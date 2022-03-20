const Router = require('koa-router')
const router = new Router()
const { getAPIHome, getAllPosts, getPostById, addPost } = require('../Controllers/api.controller')
const { postValidatorMiddleware } = require('../Middlewares/postValidator.middleware')

//Api home
router.get('/', getAPIHome);
//Get all posts
router.get('/posts', getAllPosts)
//Get post by id
router.get('/post/:id', getPostById)
//Add a new post
router.post('/new', postValidatorMiddleware, addPost)


module.exports = router