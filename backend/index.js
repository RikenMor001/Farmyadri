import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.post("/api/v1/auth/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassowrd = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassowrd
            }
        })
        const exisitingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
    
        if (exisitingUser){
            res.status(400).json({
                message: "User already exists"
            })
        }
    
        res.status(201).json({
            message: "User created successfully",
            user: user
        })
    
        const token = jwt.sign({
            _id: user.id,
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        res.status(201).json({
            message: "User created successfully",
            user: user,
            token: token
        })    
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error
        })
    }
    
});

app.post("api/v1/auth/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
