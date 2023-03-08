import express from "express";
import {
  contact,
  courseRequest,
  getAdminStats,
} from "../controllers/otherController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//contact form

router.route("/contact").post(contact);

//course request
router.route("/courserequest").post(courseRequest);

// Get admin dashboard stats
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
