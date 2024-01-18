import { prisma } from "../db"
import express from "express"

const router = express.Router()

export const getAuthor = async (authorId: string) => {
    const author = await prisma.user.findUnique({
        where: {
            id: authorId
        },
    })
    return author
}

router.get("/:id", async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ error: "No user Id provided" })
    }
    const user = await getAuthor(id)
    return res.status(200).json(user)
})

export default router