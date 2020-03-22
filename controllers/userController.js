const db = require("../models");

module.exports = 
{
  findUserByEmail: function(req, res) {
    db.Use
      .findOne({ email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUserByEmail: function(req, res) {
    db.User
      .findOneAndUpdate({email: req.params.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};