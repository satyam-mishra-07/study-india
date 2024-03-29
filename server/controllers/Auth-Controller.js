const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, email, phone, userClass, age, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const userCreated = await User.create({ name, email, phone, userClass, age, password });
    return res.status(201).json({
      message: "User Created Successfully",
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error: ", error : error.toString() });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    if(!isMatch){
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({
      message: "Login Successfull",
      token: await userExist.generateToken(),
      userID: userExist._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error: ", error : error.toString() });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Internal Server Error: ", error : error.toString() });
  }
}

  module.exports = { register, login, user };
