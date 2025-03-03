import express, { json } from "express";
import userRouter from "./user.router.js";
const app = express();

app.use(json());
app.use("/", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});