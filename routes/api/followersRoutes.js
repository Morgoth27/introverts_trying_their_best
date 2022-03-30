const router = require('express').Router();

const {
    addFollower,
    deleteFollower
}  = require('../../controllers/followerController')

router.route('/:userId/followers').put(addFollower)
router.route('/:userId/followers/:followerId').delete(deleteFollower)

module.exports = router;