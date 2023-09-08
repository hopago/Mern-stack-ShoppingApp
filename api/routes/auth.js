const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// Register
router.post("/register", async (req, res) => {

    try {
        
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
            isAdmin: req.body.isAdmin,
        });

        const savedUser = await newUser.save();

        res.status(200).json(savedUser);

    } catch (err) {
        res.status(500).json(err);
    }

});

// Login
router.post("/login", async (req, res) => {

    try {

        const user = await User.findOne({
            username: req.body.username,
        });

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const userPassword = decryptedPassword.toString(CryptoJS.enc.Utf8);

        !user && res.status(401).json("Wrong Creds!");
        userPassword !== req.body.password && res.status(401).json("Wrong Creds!");

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, 
          process.env.JWT_SECRET,
          {expiresIn: "7d"}
        );

        const { password, ...userInfo } = user._doc;

        res.status(200).json({...userInfo, accessToken});

    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;