const {verify} = require('../utils/jwt')
const {jwtSecret} = require('../config/config.default')
const {User} = require('../model')

module.exports = async (req, res, next) => {
    // get headers from token
    // verify the token
    // verify unsuccessfully -> response 401
    // verify successfully -> next
    let token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null

    if (!token) {
        return res.status(401).end()
    }

    try {
        const decodedToken = await verify(token, jwtSecret)
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch (err) {
        return res.status(401).end()
    }
}