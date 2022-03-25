const { User, Thought } = require('../models');
// const { Types } = require('mongoose');

module.exports = {

    getAllThoughts(req, res) {
        Thought.find()
          .then((thoughts) =>
            res.json(thoughts))
          .catch((err) =>
            res.status(500).json(err));
      },
    getThoughtById(req, res) {
        Thought.findOne({
            _id: req.params.thoughtId
        })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({
                  message: 'Sorry, no thought with that ID'
                })
              : res.json(thought)
          )
          .catch((err) =>
            res.status(500).json(err));
      },

    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet:
                { thoughts: thought._id }},
              { new: true }
          );
          })

          .then((user) =>
            !user
              ? res.status(404).json({
                message: 'Sorry, no user found with that ID.'
              })
            : res.json('Thought created.')
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

    deleteThought(req, res) {
        Thought.findOneAndDelete({
            _id: req.params.thoughtId
        })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Sorry, no thought found with that ID.' })
              : User.deleteMany({
                  _id:
                    { $in:
                        thought.reaction
                    }
                })
          )
          .then(() =>
            res.json({
              message: 'Thought deleted!'
            }))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
      },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true,
            new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({
                  message: 'Sorry, no thought found with that ID.'
                })
              : res.json('Thought updated.')
          )
          .catch((err) => res.status(500).json(err));
      },
};