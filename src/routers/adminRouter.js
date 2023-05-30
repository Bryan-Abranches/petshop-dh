const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/home', AdminController.showAdmin);

module.exports = router;

