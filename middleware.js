module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.sessio.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if(req.session.returnTo){
        res.local.returnTo = req.session.returnTo;
    }
    next();
}