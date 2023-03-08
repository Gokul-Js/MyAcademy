import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

export const contact = catchAsyncError(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return next(new ErrorHandler("Please fill all fields", 400));
  }

  const to = process.env.MY_MAIL;
  const subject = "Contact From myacademy";
  const text = `Name: ${name} \n Email: ${email} \n Message: ${message}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Contact form submitted successfully",
  });
});

export const courseRequest = catchAsyncError(async (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return next(new ErrorHandler("Please fill all fields", 400));
  }

  const to = process.env.MY_MAIL;
  const subject = "Contact From myacademy";
  const text = `Name: ${name} \n Email: ${email} \n Course: ${course}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Course request sent successfully",
  });
});

export const getAdminStats = catchAsyncError((req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin stats",
  });
});
