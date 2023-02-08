const mongoose = require('mongoose');
const Candidate = require('../models/candidateModel');

exports.getCandidates = async (req, res, next) => {
  const candidates = await Candidate.find();
  res.status(200).json({
    status: 'success',
    results: candidates.length,
    data: {
      candidates,
    },
  });
};

exports.getCandidate = async (req, res, next) => {
  const candidate = await Candidate.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      candidate,
    },
  });
};

exports.createCandidate = async (req, res, next) => {
  const candidate = new Candidate({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  await candidate.save();
  res.status(200).json({
    status: 'success',
    data: {
      candidate,
    },
  });
};

exports.updateCandidate = async (req, res, next) => {
  const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send({
    status: 'success',
    data: {
      candidate,
    },
  });
};

exports.deleteCandidate = async (req, res, next) => {
  Candidate.findByIdAndDelete(req.params.id, function (err, candidate) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('deleted', candidate);
    }
  });
};
