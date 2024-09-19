// imports
import dotenv from "dotenv";
import express from "express";
import { mainRouter } from "./api/mainRouter.js";
import { adminRouter } from "./admin/adminRouter.js";

// variables
dotenv.config();
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "";
const JWT_SECRET = process.env.JWT_SECRET || "";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to Clean Express 🚅...");
});
app.use("/api", mainRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log("Server is Started on port " + PORT);
});
