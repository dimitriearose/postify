import express, { Application, Request, Response, NextFunction } from "express"
import dotenv from "dotenv"
import cors from "cors"
import postRouter from "./routes/post"
import userRouter from "./routes/user"
import connect from "./db/mongoose"

dotenv.config({ path: "src/.env" })

const app: Application = express()
connect()

app.use(cors())
app.use(express.json())
app.use(postRouter)
app.use(userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Api is up and running" })
})

app.listen(process.env.PORT, () => {
  console.log(`Server Up on Port ${process.env.PORT}`)
})
