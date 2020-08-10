const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/users')
const authenticate = require('./middlewares/authenticate')
const routeName = "/users"

// Cria login
router.post(`${routeName}/login`, controller.login)

router.post(routeName, authenticate, controller.forgotPassword)

module.exports = router
