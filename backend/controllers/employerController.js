const mongoose = require('mongoose');
const Employer = require('../models/employerModel');

exports.getEmployers = async (req, res, next) => {
  const employers = await Employer.find();
  res.status(200).json({
    status: 'success',
    results: employers.length,
    data: {
      employers,
    },
  });
};

exports.getEmployer = async (req, res, next) => {
  const employer = await Employer.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      employer,
    },
  });
};

exports.createEmployer = async (req, res, next) => {
  const employer = new Employer({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  await employer.save();
  res.status(201).json({
    status: 'success',
    data: {
      employer,
    },
  });
};

exports.updateEmployer = async (req, res, next) => {
  const employer = await Employer.findByIdAndUpdated(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      employer,
    },
  });
};

exports.deleteEmployer = async (req, res, next) => {
  await Employer.findByIdAndDelete(req.params.id, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log('deleted', doc);
    }
  });
};
