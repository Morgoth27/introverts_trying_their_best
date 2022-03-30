const { User, Thought, Follower } = require('../models');

module.exports = {

addFollower(req, res) {
    User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: {
        followers: req.body.followerId
    }},
    { runValidators: true,
        new: true }
    )
    .then((user) =>
        !user
        ? res.status(404).json({
            message: 'No such user exists.'
        })
        : res.json(user)
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
},

  deleteFollower(req, res) {
    User.findByIdAndUpdate(
    { _id: req.params.userId },
    { $pull: {
        followers: req.params.followerId
    } },
    { runValidators: true,
        new: true }
    )
    .then((user) =>
        !user
        ? res.status(404).json({ message: 'No such user exists.' })
        : res.json({ message: 'Removed follower.' })
    )
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
},
}