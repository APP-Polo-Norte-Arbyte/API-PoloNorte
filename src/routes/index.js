const { Router } = require('express')
const router = new Router()

const users = require('./users')
const equipments = require('./equipments')
const maintenances = require('./maintenances')

router.use(users)
router.use(maintenances)
router.use(equipments)


//quando não encontrar nenhuma rota
router.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})


module.exports = router