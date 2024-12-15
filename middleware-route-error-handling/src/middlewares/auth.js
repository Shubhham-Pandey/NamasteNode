const adminAuth = (req, res, next) => {
    const token = "xyz@123";
    const isAuthorizedUser = token === "xyz@123";
    if(!isAuthorizedUser) {
        res.status(401).send('User is not Authorized');
    }
    next();
}

const userAuth = (req, res, next) => {
    const userToken = "user@123";
    const isUserValid = userToken === "user@123";
    if(!isUserValid) {
        res.status(401).send('User not found.');
    }
    next();
}

module.exports = {
    adminAuth,
    userAuth
}