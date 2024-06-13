const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./dbconnection/db.js')
const cors=require('cors')
dotenv.config()
const userRoute=require('./Routes/userRoute.js')
const recipeRoute=require('./Routes/reciepeRoute.js')
const PORT=process.env.PORT || 5173
const app=express()
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api',userRoute)
app.use('/api',recipeRoute)

app.listen(PORT,()=>{
    console.log(`we are running on ${PORT}`)
})



