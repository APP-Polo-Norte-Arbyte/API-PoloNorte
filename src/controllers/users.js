const service = require('../services/users')
const handleError = require('./handleError')

const login = async (req, res) => {
    try {
        if (!req.body.cpf || !req.body.password) {
            throw { status: 404, message: "Dados incorretos" }
        }
        const created = await service.login(req.body)
        res.status(202).json(created)
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = {
    login
}