const User = require('../model/User');
const { verifyTokenAndAutherization, verifyTokenAndAdmin } = require('./verifyToken');
const cryptojs = require('crypto-js');

const router = require('express').Router();


router.put("/update/:id", verifyTokenAndAutherization, async(req, res) => {

    if (req.body.password) 
        req.body.password = cryptojs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updateUser);
    
    }catch (error) {
        
        res.status(500).json(error.message);
    }
});

//DELETE
router.delete("/delete/:id",verifyTokenAndAutherization,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("User has been deleted");
    
    }catch(error){

        res.status(500).json(error.message);

    }
});

// GET USER
router.get("/find-user/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{

        const user = await User.findById(req.params.id);

        if(!user) res.send("Couldn't find any user with that id!!");

        const {password,...newUser} = user._doc;

        res.status(200).json(newUser);

    }catch(error){
        res.status(500).json(error.message);
    }
});

//GET ALL USERS
router.get("/find-all-users",verifyTokenAndAdmin,async(req,res)=>{

    const query = req.params.new;

    try{
        const allUsers = query? await User.find().limit(5).sort({username:1}) : await User.find().sort({username:1});

        for(let i =0; i<allUsers.length;i++){
            const {password,...newUser} = allUsers[i]._doc;
            allUsers[i] = newUser;
        }

        res.status(200).json(allUsers);
    }catch(error){
        res.status(500).json(error.message);
    }
});

//GET USER STAT
// router.get("/stats",(req,res)=>{
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

//     try{

//     }catch(error){
//         res.status(500).json(error.message);
//     }
// })

module.exports = router;