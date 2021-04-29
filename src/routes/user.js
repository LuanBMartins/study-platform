const express = require('express')
const router = express.Router()
const {
    createUser, 
    getUser, 
    updateUser, 
    deleteUser
} = require('./../controller/user.controller')

router.post('/', createUser)
router.get('/', getUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

module.exports = router