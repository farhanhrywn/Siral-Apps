const jwt = require('jsonwebtoken')

function getToken(data) {
    const token = jwt.sign(data, 'rahasia')
    return token
}

function verifyToken(data) {
    const decodeToken = jwt.verify(data, 'rahasia')
    return decodeToken
}
module.exports = {
    getToken,
    verifyToken
}