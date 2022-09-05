import express from "express"
import { buySubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription)

// Verify Payment and save refrence in Database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// Get RazorPay key
router.route("/razorpaykey").get(getRazorPayKey)

// Cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, )

export default router;