const mongoose = require('mongoose')


// we are creating a new object of the class
// mongoose.schema
// this schema defines the structure of the documents we'll be passing into the collection
// this does not do validation checking
// const TaskSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean
// }) 

// we use objects, in the schema, to specify how we want that property handled
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
}) 


// only the properties that we set in our schema will be passed on to the database
// everything else is ignored

// model can be thought of to be a representation of a document 
// it takes, the name of the collection for which the model is for, and the schema as parameters
// we'll be using this model to interact with the collection, 'tasks',
// and to perform CRUD applications on it

// mongoose automatically looks for the plural lowercased vaersion of your model name as a collection
// instance of a model is called a document

module.exports = mongoose.model('Task', TaskSchema)