const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const employerSchema = new mongoose.Schema({
  companyName: {
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
    // hides the password in the response
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    // only works on create and save operations
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  industry: {
    type: String,
    // required: true,
  },
  jobTitles: {
    type: String,
    // required: true,
  },
  jobDescription: {
    type: String,
    // required: true,
  },
  requiredSkills: [
    {
      type: String,
      // required: true,
    },
  ],
  yearsExperience: {
    type: Number,
    // required: true,
  },
  educationLevel: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    // required: true,
  },
  remote: {
    type: Boolean,
    // required: true,
    default: false,
  },
});

employerSchema.pre('save', async function (next) {
  // only run this function if the password is modified
  if (!this.isModified('password')) return next();

  // hash the password with the cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // delete the passwordConfirm field
  this.passwordConfirm = undefined;
});

employerSchema.methods.correctPassword = async function (
  employerPassword,
  userPassword
) {
  return await bcrypt.compare(employerPassword, userPassword);
};

module.exports = mongoose.model('Employer', employerSchema);
