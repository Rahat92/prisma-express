const express = require('express')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.get("/", async(req,res) => {
    const users = await prisma.user.findMany()
    console.log(users)
})

app.post("/", async(req,res) => {
    const user = await prisma.user.create({data: req.body})
    console.log(user)
})
app.put("/:id", async(req,res) => {
    
    const user = await prisma.user.update({where: {id: parseInt(req.params.id)}, data: {age: 30}})
    console.log(user)
})
app.delete("/:id", async(req,res) => {
    const user = await prisma.user.delete({where: {id: parseInt(req.params.id)}})
    console.log(user)
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})