// Configuration of the env variables
const dotenv =require('dotenv')
dotenv.config();
const connectionToDb = require('./db')
connectionToDb();


const express= require('express')
const app = express();
const appPort = process.env.APP_PORT || 4000
const auth = require('./routes/auth')

app.use(express.json())



app.use('/api/auth',auth)
app.get('/',(req,res)=>{
res.send('Hello')
})


app.listen(appPort,()=>{
    console.log(`Your server is listening on http://localhost:${appPort}`)
})