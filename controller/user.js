exports.showLogin = async (req, res) => {
    try {
        res.render('login.html', {
            isLogin: true
        })
    } catch (err) {
        next(err)
    }
}

exports.showRegister = async (req, res) => {
    try {
        res.render('login.html')
    } catch (err) {
        next(err)
    }
}

exports.register = async (req, res) => {
    try {
        console.log(req.body)
        // 1. TODO: data verification
        // 2. verified, creat new user
        // 3. keep login
        // 4. go to the front page



        // if (!req.body.email) {
        //     console.log(req.body)
        //     return res.render('login.html', {
        //         errors: ['Email could not be empty!']
        //     })
        //     // return res.send('Email could not be empty!')
        // }
        // res.send('Your account is verified.')
    } catch (err) {
        next(err)
    }
}

exports.showSettings = async (req, res) => {
    try {
        res.render('settings.html')
    } catch (err) {
        next(err)
    }
}

exports.showProfile = async (req, res) => {
    try {
        res.render('profile.html')
    } catch (err) {
        next(err)
    }
}