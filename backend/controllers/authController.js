const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { createTokenUser, createJWT } = require("../utils");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already exists" });
    }

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin" : "user";

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role,
    });

    const tokenUser = createTokenUser(user);
    const token = createJWT({ payload: tokenUser });

    res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Registration failed" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide an email and password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const isPasswordCorrect = await user.comparePasswords(password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  const tokenUser = createTokenUser(user);
  const token = createJWT({ payload: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
};

module.exports = {
  register,
  login,
};
