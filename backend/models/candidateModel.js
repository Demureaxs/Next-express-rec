const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const candidateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'please provide a email address'],
    unique: true,
    lowercase: true,
    // validate: [validator.validate, validate.email 'please provide a valid email address'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8,
    // hides the password in the response body
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    // validate only works on save
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  industryExperience: [
    {
      type: String,
    },
  ],
  jobTitle: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  yearsExperience: {
    type: Number,
  },
  educationLevel: {
    type: String,
  },
  location: {
    type: String,
  },
});

candidateSchema.pre('save', async function (next) {
  // only run this function if the password is modified
  if (!this.isModified('password')) return next();

  // hash the password with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // this removes the confirmation password from the database
  this.passwordConfirm = undefined;
});

candidateSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model('Candidate', candidateSchema);
