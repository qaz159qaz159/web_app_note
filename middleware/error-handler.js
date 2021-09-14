const util = require('util');

module.exports = () => {
    return (err, req, res, next) => {
        console.log(err)
        res.status(500).json({
            error: util.format(err)
        })
    }
}