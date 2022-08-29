import express from "express"
import { register } from "../controllers/userController.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register)

// Login

//Logout

// Get my profile

export default router;