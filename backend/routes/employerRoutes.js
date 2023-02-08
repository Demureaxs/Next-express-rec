const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');
const authController = require('../controllers/authController');

// sign up a new employer account (route handling)
router.post('/signup', authController.employerSignup);
// log an employer in
router.post('/login', authController.employerLogin);

router
  .route('/')
  .get(employerController.getEmployers)
  .post(employerController.createEmployer);

router
  .route('/:id')
  .get(employerController.getEmployer)
  .put(employerController.updateEmployer)
  .delete(employerController.deleteEmployer);

module.exports = router;
