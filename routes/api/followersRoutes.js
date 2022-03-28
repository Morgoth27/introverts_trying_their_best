const router = require('express').Router();

// router.post('/users/:userId/followers/:followerId');
// router.delete('/users/:userId/followers/:followerId')

const {
    addFollower,
    deleteFollower
}  = require('../../controllers/followerController')

router.route('/:userId/followers/:followerId').post(addFollower).delete(deleteFollower)

module.exports = router;