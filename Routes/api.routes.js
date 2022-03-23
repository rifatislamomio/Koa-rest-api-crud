const router = require('koa-router')()

const { getAPIHome, getAllPosts,
    getPostById, addPost,
    deleteById, updateById,
    getVideoStream, addPostToDb,
    getAllPostsFromDb, deleteByIdInDb,
    updateByIdInDb } = require('../Controllers/api.controller')
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
//Stream video file
router.get('/watch', getVideoStream);

//Cloud DB integrated Api routes
//Get all posts
router.get('/api/posts', getAllPostsFromDb);
//Add a new post
router.post('/api/new', addPostToDb);
//Delete post by id
router.delete('/api/remove/:id', deleteByIdInDb);
//Update post by id
router.put('/api/edit/:id', updateByIdInDb);


module.exports = router