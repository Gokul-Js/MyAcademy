import express from "express"
import { addToPlaylist, changePassword, forgetPassword, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register)

// Login
router.route("/login").post(login)
//Logout
router.route("/logout").get(logout)

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile)
// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword)
// Update Profile
router.route("/updateprofile").put(isAuthenticated, updateProfile)
// Update ProfilePicture
router.route("/updateprofilepicture").put(isAuthenticated, updateProfilePicture)

// Forget Password
router.route("/forgetpassword").post(forgetPassword)
// Reset Password
router.route("/resetpassword/:token").put(resetPassword)

// AddtoPlaylist
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist)

// RemoveFromPlayList
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist)

export default router;