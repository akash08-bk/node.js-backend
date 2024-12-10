const express = require('express')
const{
    getUsers,
    createUser,
    getUsersById,
    updateUser,
    deleteUser,
}=require('../controllers/userController')
const router = express.Router();
router.route('/')
    .get(getUsers)
    .post(createUser)
router.route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser)

module.exports=router;