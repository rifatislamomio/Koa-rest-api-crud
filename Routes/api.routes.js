const Router = require('koa-router')
const router = new Router()
const { getAPIHome,
    getAllPosts,
    getPostById,
    addPost,
    deleteById,
    updateById } = require('../Controllers/api.controller')
const { postValidatorMiddleware } = require('../Middlewares/postValidator.middleware')

//Api home
router.get('/', getAPIHome);
//Get all posts
router.get('/posts', getAllPosts);
//Get post by id
router.get('/post/:id', getPostById);
//Add a new post
router.post('/new', postValidatorMiddleware, addPost);
//Delete post by id
router.delete('/remove/:id', deleteById);
//Update post by id
router.put('/edit/:id', updateById);

module.exports = router