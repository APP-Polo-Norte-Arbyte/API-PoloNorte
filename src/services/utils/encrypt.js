const crypto = require('crypto')

const generatePassword = () => {
    return crypto.randomBytes(6).toString('hex')
}
const encryptPassword = (password, salt = generatePassword()) => {
    const encryptedPassword = crypto.pbkdf2Sync(
        password,
        salt,
        100000,
        64,
        "sha512"
    )
    return {
        salt,
        encryptedPassword: encryptedPassword.toString('hex')
    }
}
module.exports = {
    encryptPassword,
    generatePassword
}