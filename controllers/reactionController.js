const { Thought } = require('../models');

module.exports = {
    addReaction(req, res) {
        Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Sorry, no thought with this id exists!'})
              : res.json({message: 'Added reaction.'})
          )
          .catch((err) => res.status(500).json(err));
      },

    removeReaction(req, res) {
        Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: {reactions: {reactionId: req.body.reactionId }}},
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'Sorry, no thought with this id exists!'})
            : res.json({message: 'Removed reaction.'})
        )
        .catch((err) => res.status(500).json(err))
}}