const { encryptPassword } = require('./utils/encrypt')
const repository = require('../repositories/users')
const { createToken } = require('./utils/jwt')


const login = async loginData => {
    const user = await repository.getOne({ cpf: loginData.cpf })
    if (!user) {
        throw { status: 401, message: 'Not Authorized' }
    }
    const { encryptedPassword } = encryptPassword(loginData.password, user.salt)
    if (encryptedPassword !== user.password) {
        throw { status: 401, message: 'Not Authorized' }
    }
    const token = createToken(user.id)
    return {
        user: user.view(),
        token
    }
}

const forgotPassword = async (data) => {
    const user = await repository.getOne({ cpf: data.cpf })
    if (user.id) {
        const { salt, encryptedPassword: password } = encryptPassword(data.password)
        await repository.update(user.id, { password, salt })
    }
}

const getById = async id => {
    const user = await repository.getOne({ id: id })
    if (!user) {
        throw { status: 404, message: "Not found" }
    }
    return user
}

module.exports = {
    login,
    getById,
    forgotPassword,
}