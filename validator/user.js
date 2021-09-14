const validator = require('../middleware/validate')
const {body} = require("express-validator");
const {User} = require("../model");
const md5 = require('../utils/md5')

exports.login = [
    validator([
        body('user.email').notEmpty().withMessage('email cannot be empty!'),
        body('user.password').notEmpty().withMessage('password cannot be empty!')
    ]),
    validator([
        body('user.email').custom(async (email, {req}) => {
            const user = await User.findOne({email})
                .select(['email', 'username', 'bio', 'image', 'password'])
            if (!user) {
                return Promise.reject('user is not exist!')
            }

            req.user = user
        })
    ]),
    validator([
        body('user.password').custom(async (password, {req}) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('password not correct!')
            }
        })
    ])
]

exports.register = validator([
    body('user.username')
        .notEmpty().withMessage('username is empty, and it is required')
        .custom(async username => {
            const user = await User.findOne({username})
            if (user) {
                return Promise.reject('username is used')
            }
        }),

    body('user.password').notEmpty().withMessage('password is empty, and it is required'),

    body('user.email')
        .notEmpty().withMessage('email is empty, and it is required')
        .isEmail().withMessage('email format is wrong')
        .bail()
        .custom(async email => {
            const user = await User.findOne({email})
            if (user) {
                return Promise.reject('email is used')
            }
        })
])