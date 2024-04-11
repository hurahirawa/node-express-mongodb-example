const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      passConf: joi.string().min(6).max(32).required().label('passConf'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  cPass:{
    body:{
      email: joi.string().email().required().label('Email'),
      oldPassword: joi.string().min(6).max(32).required().label('oldPassword'),
      nPass: joi.string().min(6).max(32).required().label('nPass'),
      passConf: joi.string().min(6).max(32).required().label('passConf'),
    }
  }
};