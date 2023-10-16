const express = require('express');
const Latihan1 = require('../controller/latihan');
const UserController = require('../controller/users');

const router = express.Router();

router.post('/',Latihan1.kalkulator2);
router.get('/',Latihan1.looping1);

//GET DATA USERS
router.get('/users', UserController.getAllUsers);
// CREATE - POST
router.post('/users', UserController.createNewUser);
// UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);
// DELETE - DELETE
router.delete('/:idUser', UserController.deleteUser);

module.exports = router;