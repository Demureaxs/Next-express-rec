const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Candidate = require('../models/candidateModel');
const Employer = require('../models/employerModel');
const AppError = require('../utils/appError');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// sign up a new candidate
exports.candidateSignup = async (req, res, next) => {
  const newUser = await Candidate.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      _id: new mongoose.Types.ObjectId(),
      user: newUser,
    },
  });
};

// sign up a new employee
exports.employerSignup = async (req, res, next) => {
  const newUser = await Employer.create({
    companyName: req.body.companyName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      _id: new mongoose.Types.ObjectId(),
      user: newUser,
    },
  });
};

exports.candidateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide a valid email and password', 400));
  }

  // 2) check if user exists and password is correct
  const user = await Candidate.findOne({ email }).select('+password');
  // defined in candidate models at the bottom of the page

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  // 3) if everything is correct send back web token
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
};

exports.employerLogin = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exists
  if (!email || !password) {
    return next(new AppError('Please provide a valid email and password', 400));
  }

  const user = await Employer.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
};

// as this sits before the route handler the route handler will only be called if the code makes it to next
exports.protect = async (req, res, next) => {
  // 1) Get the token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  console.log(token);
  if(!token) {
    return next(new AppError('You are not logged in', 401));
  }
  // 2) Verify token

  // 2) Verification token

  // 3) check if user still exists

  // 4) check if user changed password after token was issued
  next();
};
