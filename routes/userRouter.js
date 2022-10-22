const express = require("express");
const userRouter = express.Router();
const USER = require("../modules/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register new user
userRouter.post("/register", async (req, res) => {
  try {
    // get user input
    const { name, email, password, confirm_password } = req.body; //json

    //validation user input
    if (!(name && email && password && confirm_password)) {
      res.status(400).send("field must be not empty");
    }

    // check if user exist
    const oldUser = await USER.findOne({ email });

    if (oldUser) {
      res.status(409).send("user already exist");
    }

    //confirm password
    //if (!(password == confirm_password)) {
    //  res.status(409).send("please make sure your confirm password");
    //}

    // emcrypt password
    const emcryptedPassord = await bcrypt.hash(password, 10);

    //create user
    const user = await USER.create({
      name,
      email,
      password: emcryptedPassord,
      confirm_password,
    });
    const token = jwt.sign({ user_id: user._id, email }, process.env.SECRET, {
      expiresIn: "2h",
    });

    user.token = token;
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

//login
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // vérification ( champs non vides )
    if (!(email && password)) {
      res.status(400).send("input must be fielled");
    }

    // vérification user exixte dans le DB
    const user = await USER.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        process.env.SECRET,
        { expiresIn: "2h" }
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(403).send("bad credential");
  } catch (error) {
    console.log(error);
  }
});

// get

userRouter.get("/", async (req, res) => {
  try {
    const result = await USER.find();
    res.status(200).send({ msg: "all users", users: result });
  } catch (error) {
    console.log(error);
  }
});

//get by id

userRouter.get("/:id", async (req, res) => {
  try {
    const result = await USER.findById({ _id: req.params.id });
    res.status(200).send({ msg: "user", user: result });
  } catch (error) {
    console.log(error);
  }
});

// update

userRouter.put("/:id", async (req, res) => {
  try {
    const result = await USER.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "user updated", user: result });
  } catch (error) {
    console.log(error);
  }
});

// delete

userRouter.delete("/:id", async (req, res) => {
  try {
    const result = await USER.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({ msg: "user deleted", user: result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
