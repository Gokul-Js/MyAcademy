import express from "express"
import { getAllCourses, createCourse, getCourseLectures, addLecture } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// Get all courses witout lectures
router.route("/courses").get(getAllCourses)

// create new course only admin
router.route("/createcourse").post(singleUpload, createCourse)

// add lecture
router.route("/course/:id").get(getCourseLectures).post(singleUpload,addLecture)

export default router;