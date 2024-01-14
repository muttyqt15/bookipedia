// Berkomunikasi dg database, khusus untuk ngambil data
// Boleh utk pake ORM, bole untuk raw query
// Supaya kalo mau ganti ORM, tinggal ganti di sini

// import { User } from "@prisma/client";
import { prisma } from "../db/index";
import { UserInput } from "./user.interfaces";

export const findAllUsers = async () => {
    const users = prisma.user.findMany();
    return users;
}

export const findUserById = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return user;
}

export const insertUser = async (newUserData: UserInput) => { // Type is userinput because it's based off client input
    const user = await prisma.user.create({
        data: {
            username: newUserData.username,
            email: newUserData.email,
            password: newUserData.password,
        }
    })
    return user
}