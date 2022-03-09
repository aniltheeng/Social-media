const express = require('express')
const { createPosts, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require('../controller/post')
const { isAuthenticated } = require('../middlewares/auth')

const router = express.Router()

// isAuthenticated is used to receive the current user that gonna help to find the id and push newPost to that id
router.route('/post/upload').post(isAuthenticated,createPosts)

router.route('/post/:id').get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost).put(isAuthenticated,updateCaption)

router.route('/posts').get(isAuthenticated,getPostOfFollowing)

router.route('/post/comment/:id').put(isAuthenticated,commentOnPost)
router.route('/post/comment/:id').delete(isAuthenticated,deleteComment)



module.exports = router