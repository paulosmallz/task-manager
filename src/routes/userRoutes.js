const express = require("express");
const auth = require("../helpers/auth");
const {
  CreateNewUser,
  GetAllUsers,
  GetSingleUser,
  UpdateSingleUser,
  DeleteSingleUser,
  LoginUser,
  GetOwnProfile
} = require("../controllers/userControllers");

const router = new express.Router();

// Create a new user
router.post("/create", CreateNewUser);

//login user

router.post("/login", LoginUser);

//get all users in the db
router.get("/all", auth, GetAllUsers);

// get your own profile

router.get("/user/me",auth, GetOwnProfile);

//Get a particular user in db

router.get("/single/:id", GetSingleUser);

//update an existing user

router.patch("/single/:id", UpdateSingleUser);

//Delete a user
router.delete("/single/:id", DeleteSingleUser);

module.exports = router;