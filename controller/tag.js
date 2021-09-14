// get tags
exports.getTag = async (req, res, next) => {
    try {
        res.send('get /')
    } catch (err) {
        next(err)
    }
}