const { User, Thought } = require('../models');

module.exports = {

    getAllUsers(req, res) {
        User.find()
            .then((users) =>
                res.json(users))
            .catch((err) => {
                res.status(500).json(err)
              });
    },    
    getUserById(req, res) {
        User.findById(req.params.userId)
          .select('-__v')
          .populate('thoughts')
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'No user with that ID exists.'
                })
              : res.json(user)
          )
          .catch((err) => {
            res.status(500).json(err)
          });
    },
    createUser(req, res) {
        User.create(req.body)
          .then((user) =>
            res.json(user))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true,
            new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'No user with that ID exists.'
                })
              : res.json(user)
          )
          .catch((err) => {
            res.status(500).json(err)
          });
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.userId)
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'No user with that ID exists.'
                })
              : Thought.deleteMany({
                  _id: {
                      $in: user.thoughts
                    }
                })
          )
          .then(() =>
            res.json({
                message: 'User and thoughts have been deleted.'
            }))
          .catch((err) => {
            res.status(500).json(err)});
    },
};