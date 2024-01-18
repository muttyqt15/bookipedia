import { prisma } from "../db";
import { LoginData, SignInData } from "./auth.interfaces";
import bcrypt from "bcrypt";
import "dotenv/config";

export const register = async (userData: SignInData) => {
    const { username, password, email } = userData
    const hashedPassword = await bcrypt.hash(password, 10)
    const isPasswordValid = await bcrypt.compare(password, hashedPassword)
        
    if (!isPasswordValid) {
        throw new Error("Password is invalid!")
    }
    const userPayload = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword
        }
    })
    return userPayload
}

export const login = async (userData: LoginData) => {
    const user = await prisma.user.findUnique({
        where: {
            username: userData.username
        }
    })
    return user
}