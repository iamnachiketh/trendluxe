const router = require('express').Router();
const User = require('../model/User');
const cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');

//REGISTER
router.post("/register", async (req, res) => {
    
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        isAdmin:req.body.isAdmin
    });
    let response = null;
    try {
        response = await newUser.save();

        res.status(201).json(response);

    } catch (error) {
        
        console.log(error);
        
        res.status(500).json(error);
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        let response = await User.findOne({ username: req.body.username });

        if (!response) return res.status(400).json("Wrong Credentials");
        
        const decryptedData = cryptojs.AES.decrypt(response.password, process.env.PASS_SEC);
        
        let originalPassword = decryptedData.toString(cryptojs.enc.Utf8);
        
        if (req.body.password === originalPassword) {

            const { password, ...newResponse } = response._doc;
            
            const accessToken = jwt.sign({
                id: newResponse._id,
                isAdmin: newResponse.isAdmin
            }, process.env.JWT_SEC, { expiresIn: "3d" });
            
            res.status(200).json({...newResponse,accessToken});
        }
        
        else throw new Error("Wrong Credentials");

    } catch (error) {

        console.log(error.message);
        
        res.status(500).json(error.message);
    }
})


module.exports = router;