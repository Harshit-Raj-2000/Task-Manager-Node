const mongoose = require('mongoose')

// mongoose.connect returns a promise which will be returned when this function is called
// we are using this function, instead of simply calling connect, because we want to connect to the db,
// and only if connection is established, we want to start up the server
const connectDB = (url) =>{
    return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
}

module.exports = connectDB

// if there is a function in a module, where there is a function call in a module,
// if we import that module, and the function will be called
// earlier, we were simply calling connect, which was being executed
// when we did require('./db/connect) in app.js