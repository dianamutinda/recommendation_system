import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from bcrypt
import { Router } from "express";

const router = Router();

router.post("/register", async(req, res) => {
    try {
        const {firstName, lastName, password, email} = req.body;

   if(!firstName)
        return res.status (400).json({sucess:false, message: "First name is required"});

    if(!lastName)
        return res.status (400).json({sucess:false, message: "Last name is required"});

    if(!password)
        return res.status (400).json({sucess:false, message: "Password is required"});

    if(!email)
        return res.status (400).json({sucess:false, message: "Email is required"});

    const userWithEmail = await prisma.users.findFirst({
        where:{email:email}
    })
    if (userWithEmail)
        return res.status (400).json({sucess:false, message:"Email already exists"});
    const hashedPassword = await bcrypt.hashsync(password, 10);
    const newUser = await prisma.users.create({
        data:{
            firstName,
            lastName,
            password: hashedPassword,
            email
        }
    })

    return res.status (200).json({sucess:true,  data: newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({sucess:false, message: "Server error"});
    }
})

export default router;