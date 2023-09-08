const jwt = require("jsonwebtoken");


const verifyToken = async (req, res, next) => {

    const authHeader = req.headers.token;

    if(authHeader) {

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

            if (err) res.status(403).json("Not Valid Token!");

            req.verifyUser = user;

            next();

        })

    } else {
        return res.status(401).json("Not Authenticated!");
    }

};

const verifyTokenAuthorization = (req, res, next) => {

    return verifyToken(req, res, () => {

        if(req.verifyUser.id === req.params.id || req.verifyUser.isAdmin) {
            next();
        } else {
            return res.status(403).json("Not Allowed Way!");
        }

    });

};

const verifyTokenAdmin = (req, res, next) => {

    return verifyToken(req, res, () => {

        if(req.verifyUser.isAdmin) {
            next();
        } else {
            return res.status(403).json("Not Allowed Way!");
        }

    });

};

module.exports = { verifyToken, verifyTokenAuthorization, verifyTokenAdmin };