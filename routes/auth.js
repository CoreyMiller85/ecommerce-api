const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// Register
router.route('/register').post(async (req, res, next) => {
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
