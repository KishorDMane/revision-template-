const mongoose = require("mongoose");
const express = require("express");

const { signupModel } = require("../model/signup.model");

const SignupRouter = express.Router();

SignupRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const user = new signupModel({ name, email, password })
    await user.save();
    res.json(user)

})

module.exports = { SignupRouter }