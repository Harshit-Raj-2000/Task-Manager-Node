const express = require('express')
const router = express.Router()

const {
    getAllTasks, createTask, getTask, updateTask, deleteTask, editTask
} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)

// when we use put, we are tryong to replace the existing resource
// when we use patch it, is meant for partial update of the resource
// here I am using put, just to ceck out the functionality

module.exports = router