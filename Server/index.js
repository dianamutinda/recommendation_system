import express, { json, urlencoded } from "express";
import userRouter from "./user.router.js";
import cors from "cors"
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
)
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});