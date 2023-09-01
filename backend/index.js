// Configuration of the env variables
const dotenv =require('dotenv')
dotenv.config();
const connectionToDb = require('./db')
connectionToDb();


const express= require('express')
const app = express();
const cors =require('cors')
const appPort = process.env.APP_PORT || 4000
const auth = require('./routes/auth')
const notes = require('./routes/notes')

app.use(cors())
app.use(express.json())



app.use('/api/auth',auth)
app.use('/api/notes',notes)


app.listen(appPort,()=>{
    console.log(`Your server is listening on http://localhost:${appPort}`)
})