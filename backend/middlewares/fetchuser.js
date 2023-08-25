const dotenv = require('dotenv')
dotenv.config()

const jwt = require('jsonwebtoken')

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({
            error:'Please authenticate with a valid token'
        })
    }
    try {
        const {data} = jwt.verify(token,process.env.JWT_SECRET)
        req.user = data.user
        console.log(data)
        next();
    } catch (error) {
        res.status(401).send({
            error:'Please authenticate with a valid token'
        })
    }
}

module.exports = fetchuser;