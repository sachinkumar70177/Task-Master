const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register",  async (req, res) => {
    const { username, email, pass,fullname } = req.body;
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                return res.status(400).send({ message: err.message });
            } else {
                const newUser = new UserModel({ username, email, pass: hash,fullname, });
               

                await newUser.save();
                res.status(201).json({ message: "Registration successful." });
            }
        });
    } catch (error) {
        return res.status(400).send({ message: error.message });
    }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass, username } = req.body;
  // console.log("inside");
  try {
    const emailcheck = await UserModel.findOne({ email });
    const usercheck = await UserModel.findOne({ username });
    // !checking emai exist or not
    if (emailcheck) {
      //! comparing password with saved hash versin
      bcrypt.compare(pass, emailcheck.pass, (err, result) => {
        const { pass, ...sanitizedEmailcheck } = emailcheck.toObject();

        if (result) {
          //! creating tokn
          const token = jwt.sign(
            {
              email: emailcheck.email,
              userID: emailcheck._id,
              userName: emailcheck.first_Name,
            },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2 days",
            }
          );
          //! creating refresh token
          const rtoken = jwt.sign(
            {
              email: emailcheck.email,
              userID: emailcheck._id,
              userName: emailcheck.fullname,
            },
            process.env.REFRESH_TOKEN_KEY,
            {
              expiresIn: "7d",
            }
          );
          return res.send({
            message: `Welcome ${emailcheck.fullname}`,
            user: sanitizedEmailcheck,
            token,
            rtoken,
          });
        } else {
          return res.send({ message: "Password does Not Match " });
        }
      });
    } else {
      res.send({ message: "Wrong Email..!" });
    }
  } catch (error) {
    res.status(400).send({
      message: "Login Failed please Try again or Try after Some time ",
      error: error.message,
    });
  }
});

const passwordCheck = (value) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return pattern.test(value);
};


module.exports={
    userRouter
}