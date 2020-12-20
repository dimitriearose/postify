const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
require('./db/mongoose')
const postRouter = require('./routes/post')
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())
app.use(postRouter)





app.get('/',(req,res) => {
res.send({message:'Api is up and running'})
})


app.listen(process.env.PORT,() => {
    console.log(`Server Up on Port ${process.env.PORT}`)
})