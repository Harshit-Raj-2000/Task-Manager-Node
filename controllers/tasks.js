const Task = require('../models/Task')



// {tasks} => {tasks: tasks}

// model.find() is used to get the tasks
// wwe pass a filter object into the find method
// { }, if the filter object is empty, we get all tasks
// {name: 'john'}, here we get all tasks with name john
const getAllTasks = async (req, res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


// only the properties that we set in our schema will be passed on to the database
// everything else is ignored
// Task.create() is async and returns a promise
// we need to have a try-catch block, to handle the case
// when the promise is rejected
const createTask = async (req, res) =>{
    try {
        // creates a task, and then returns the task created
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

// const {id:TaskID} -- basically destructures the object, gets the id, and gives it an alias of TAskID, 
// for better code readability
// findOne(), finds a single tasks, based on the conditions object we pass in it
// if we pass an invalid id, or id doesn't match, then, find one returns null,
// it doesn't give an error, however if the id we pass, can't be cated into 
// object id, which mong automatically gives us, then we get an error
const getTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task) return res.status(404).json({msg: `No task with id :${taskID}`})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}


// findOneANdDelete return NULL if no task with given id
const deleteTask = async (req, res) =>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task) return res.status(404).json({msg: `No task with id :${taskID}`})
        res.status(200).json({task})
        // we don't need to send the task back after deleting
        //  res.status(200).send()
        // another way of sending responses after deleting
        // res.status(200).json({task: null, status: 'success'})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// by default returns previous value of task after updation, null if task not found
// by default validators are not run, ont values which we are updating
// to have validotrs run, and to get the new value, we have a third optons parameter
const updateTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,  //to return the new item
            runValidators: true,  // to run validators
        })
        if(!task) return res.status(404).json({msg: `No task with id :${taskID}`})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}