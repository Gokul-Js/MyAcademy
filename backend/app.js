import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
<<<<<<< Updated upstream
import cors from 'cors';
=======
// import cors from "cors";
>>>>>>> Stashed changes

config({
  path: "./config/config.env",
});

const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
<<<<<<< Updated upstream
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

=======
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );
>>>>>>> Stashed changes
// Importing & Using Routes

import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentRoutes.js";
import other from "./routes/otherRoutes.js";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);
app.use(ErrorMiddleware);

export default app;

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});
