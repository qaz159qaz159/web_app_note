const mongoose = require('mongoose');
const {dbUrl} = require('../config/config.default')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

const db = mongoose.connection

db.on('error', err => {
    console.log('connection failed!', err)
})

db.once('open', function () {
    console.log('connected successfully!')
})

module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}