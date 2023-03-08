import express from "express";
import {
  getAllCourses,
  createCourse,
  getCourseLectures,
  addLecture,
  deleteCourse,
  deleteLecture,
} from "../controllers/courseController.js";
import {
  authorizeAdmin,
  authorizeSubscriber,
  isAuthenticated,
} from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// Get all courses witout lectures
router.route("/courses").get(getAllCourses);

// create new course only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// add lecture
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscriber, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

// delete lecture
router
  .route("/lecture")
  .delete(isAuthenticated, authorizeAdmin, singleUpload, deleteLecture);

export default router;
