exports.showLogin = async (req, res) => {
    res.render('login.html', {
        isLogin: true
    })
}

exports.showRegister = async (req, res) => {
    res.render('login.html')
}

exports.showSettings = async (req, res) => {
    res.render('settings.html')
}

exports.showProfile = async (req, res) => {
    res.render('profile.html')
}