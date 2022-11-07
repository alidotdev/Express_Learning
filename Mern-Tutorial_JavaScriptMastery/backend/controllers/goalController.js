const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api/v1/goals
// @access Private

const getGoal = asyncHandler (async (req, res) => { 
    res.status(200).json({message: 'Get Goals'})
})


// @desc Set Goals
// @route POST /api/v1/goals
// @access Private

const setGoal =asyncHandler( async (req, res) => { 
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text')
    }
    res.status(200).json({message: 'Set Goals'})
})


// @desc Update Goals
// @route PUT /api/v1/goals/:id
// @access Private

const updateGoal = asyncHandler( async (req, res) => { 
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})


// @desc Delete Goals
// @route DELETE /api/v1/goals/:id
// @access Private

const deleteGoal = asyncHandler( async (req, res) => { 
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoal, 
    setGoal,
    updateGoal,
    deleteGoal
}