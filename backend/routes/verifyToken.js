const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const authHeader = req.header("token");

    if (authHeader) {

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!!");
            else if (user.id !== req.body.userId && !user.isAdmin) res.status(401).json("You are not the same user");
            else {
                req.user = user;
                next();
            }
        })
    } else {
        res.status(401).json("You are not authenticated!!!");
    }

}


const verifyTokenAndAutherization = (req, res, next) => {
    verifyToken(req, res, () => {

        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed to access this route!!")
        }
    })
}


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {

        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed to access this route!!")
        }
    })
}

module.exports = {
    verifyTokenAndAutherization,
    verifyToken,
    verifyTokenAndAdmin
};