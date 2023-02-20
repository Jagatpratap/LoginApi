const jwt = require('jsonwebtoken');

const JWT_SECRET = "$$$thisismyseckey$$$"



// get user from the jwt token and add id to req object
const fetchuser = (req, res, next)=> {
    const token = req.body.authToken
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()

    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })

    }

}

module.exports = fetchuser;

