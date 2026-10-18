const jwt = require("jsonwebtoken");

const SALT = "NKpNROxvp23DCetoXpgE";

const AuthMiddleware = async (req, res, next) => {
    try{
        // check token if there or not 
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access Denied: No token provided' });
        }

        const token = authHeader.split(' ')[1]
        const verifyToken = jwt.verify(token, SALT);
        if(verifyToken._id){
            next();
        } else {
            res.status(500).json({
                status: "Failed",
                message: "Token is not valid"
            })
        }
    } catch (err) {
        console.log("Auth controller issue : "+ err)
    }
    

}


module.exports = AuthMiddleware;