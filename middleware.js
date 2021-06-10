
const isLoggedIn = (req,res,next) => {
    req.session.returnTo=req.originalUrl;
    if(!req.isAuthenticated()){
        req.flash('error', 'You must be logged in!');
        return res.redirect("/login-register");
    }
    next();
}
const isNotLoggedIn = (req,res,next) =>{
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    next();
}
const isAdmin = (req,res,next) =>{
    if(req.user.email!='admin'){
        return res.redirect('404');
    }
    next();
}
module.exports={isLoggedIn, isNotLoggedIn, isAdmin};