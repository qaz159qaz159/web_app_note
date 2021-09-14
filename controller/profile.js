// get user data
exports.getUserData = async (req, res, next) => {
    try {
        res.send('get /:username')
    } catch (err) {
        next(err)
    }
}

// follow a user
exports.followUser = async (req, res, next) => {
    try {
        res.send('post /:username/follow')
    } catch (err) {
        next(err)
    }
}

// cancel follow a user
exports.cancelFollowUser = async (req, res, next) => {
    try {
        res.send('delete /:username/follow')
    } catch (err) {
        next(err)
    }
}