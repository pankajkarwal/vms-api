import constants from "./constants"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const fs = require('fs');


// const generateTokenV2 = (payload, is_access_token)=> {
const generateTokenV2 = (payload)=> {
   // const expiresIn = is_access_token ? Number(process.env.ACCESS_TOKEN_TIMEOUT) : Number(process.env.REFRESH_TOKEN_TIMEOUT);
    // const options = {
    //     expiresIn: constants.SECURITY.TOKEN_EXPIRE_DURATION,
    //     issuer: process.env.JWT_HOST,
    //     algorithm: "RS256"
    // }
    // const privateKey = fs.readFileSync('src\\config\\private.pem', 'utf8');
     //const private_key = process.env.JWT_PRIVATE_KEY.replace(/\\n/gm, '\n')
     const token = jwt.sign(
        payload,
        process.env.TOKEN_KEY,
        {
            expiresIn: constants.SECURITY.TOKEN_EXPIRE_DURATION,
        }
    );
    
    return token
}
export {
    generateTokenV2
}