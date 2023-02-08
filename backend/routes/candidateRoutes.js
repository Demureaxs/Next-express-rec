const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const authController = require('../controllers/authController');

// sign up a new candidate (route handler)
router.post('/signup', authController.candidateSignup);
// log a candidate in
router.post('/login', authController.candidateLogin);

router
  .route('/')
  .get(authController.protect, candidateController.getCandidates)
  .post(candidateController.createCandidate);

router
  .route('/:id')
  .get(authController.protect, candidateController.getCandidate)
  .put(candidateController.updateCandidate)
  .delete(candidateController.deleteCandidate);

module.exports = router;
