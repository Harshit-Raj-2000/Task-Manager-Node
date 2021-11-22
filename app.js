const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
 
// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)
 

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id)    - update task
// app.delete('/api/v1/tasks/:id)   - delete task

// REST API -- Representational State Transfer -- it is an API design pattern
// get all, get one, post one, update one, delete one
// athe method and routes we use are according to REST API pattern


const PORT = 3000

// connectDB function returns a promise
// this function starts the server only if db is connected
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> console.log(`server is listening on PORT ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
