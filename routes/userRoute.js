const express = require('express')
const { register, login, followUser, logOut, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, forgetPasword, changePassword } = require('../controller/user')
const { isAuthenticated } = require('../middlewares/auth')

const router = express.Router()

router.route('/register').post(register)

router.route('/login').post(login)

router.route('/follow/:id').get(isAuthenticated,followUser)

router.route('/loggout').get(isAuthenticated,logOut)

router.route('/update/password').put(isAuthenticated,updatePassword)

router.route('/update/profile').put(isAuthenticated,updateProfile)

router.route('/delete/account').delete(isAuthenticated,deleteMyProfile)

router.route('/myinfo').get(isAuthenticated,myProfile)

router.route('/user/:id').get(isAuthenticated,getUserProfile)

router.route('/users').get(isAuthenticated,getAllUsers)

router.route('/forget/password').post(forgetPasword)

router.route('/reset/password/:token').put(changePassword)

module.exports = router
