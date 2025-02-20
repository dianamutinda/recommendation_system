import express from "express";
import userRouter from "./user.router.js";
const app = express();

app.use("/user", userRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});