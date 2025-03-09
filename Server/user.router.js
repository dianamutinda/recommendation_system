import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Router } from "express";

const router = Router();

router.post("/register", async(req, res) => {
    try {
        const {firstName, lastName, password, email} = req.body;

   if(!firstName)
        return res.status (400).json({success:false, message: "First name is required"});

    if(!lastName)
        return res.status (400).json({success:false, message: "Last name is required"});

    if(!password)
        return res.status (400).json({success:false, message: "Password is required"});

    if(!email)
        return res.status (400).json({success:false, message: "Email is required"});

    const userWithEmail = await prisma.users.findFirst({
        where:{email:email}
    })
    if (userWithEmail)
        return res.status (400).json({success:false, message:"Email already exists"});
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = await prisma.users.create({
        data:{
            firstName,
            lastName,
            password: hashedPassword,
            email
        }
    })

    return res.status (200).json({success:true,  data: newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Server error"});
    }
})

router.post("/login", async(req, res) => {
  try {
    const {email, password} = req.body;

    const user = await prisma.users.findFirst({
        where: {email:email}
    })
    //res.json(user)
    if (user){
        const matchedPassword = await bcrypt.compareSync(password, user.password)
        if (matchedPassword === true){
            const payload = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, 
                {expiresIn:"10m"});
            res.cookie("access_token", token);
            res.status(200).json({success: true, data: payload});
        }else{
            res.status(401).json({success:false, message:"Wrong user credentials"})
        }
    }else{
        res.status(401).json({success:false, message:"Wrong email or password"})
    }
  } catch (error) {
    res.status(500).json({success:false, message: "Server error"});
  }
})

export default router;