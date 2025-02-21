import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
    const {firstName, lastName, password, email} = req.body;

    if(!firstName)
        return res.status (400).json({sucess:false, message: "First name is required"});

    if(!lastName)
        return res.status (400).json({sucess:false, message: "Last name is required"});

    if(!password)
        return res.status (400).json({sucess:false, message: "Password is required"});

    if(!email)
        return res.status (400).json({sucess:false, message: "Email is required"});
})

export default router;