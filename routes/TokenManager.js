var express = require('express');
var generateRouteToken = express.Router();
var verifyRouteToken = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

/* GET users listing. */


module.exports = {
  generateRouteToken:generateRouteToken.post('/generate', function(req, res) {
    dotenv.config();
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
      time: Date(),
      userId: 12,
    }
    const token = jwt.sign(data, jwtSecretKey); 
    res.send({responseMessage:"Token generated",token:token});
  }),

  verifyRouteToken:verifyRouteToken.post('/verify', function(req, res) {
  
   
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        // const token = req.header(tokenHeaderKey);
        const token = req.header('AuthToken');
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send({responseMessage:"Successfully Verified"});
        }else{
            // Access Denied
            return res.status(401).send({responseMessage: "Access Denied"});
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send({responseMessage:error.message});
    }
    // res.status(200).send({responseText:"Token generated"});
  }),
};
