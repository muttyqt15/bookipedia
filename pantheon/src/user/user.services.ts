// Service untuk membuat reusable code yang bisa dipake di controller
import { User } from "@prisma/client";
import { prisma } from "../db/index";
import { findAllUsers, insertUser } from "./user.repository";

export const getAllUsers = async () => {
    const users = await findAllUsers();
    return users
}

export const getUser = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return user
}

export const createUser = async (newUserData: User) => {
    const user = await insertUser(newUserData);
    return user
}

export const editUserDetails = async (userId: string, editedUserData: User) => {
    const user = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            username: editedUserData.username,
            email: editedUserData.email,
            password: editedUserData.password
        }
    })
    return user
}

export const deleteUser = async (userId: string) => {
    await prisma.user.delete({
        where: {
            id: userId
        }
    })
}

