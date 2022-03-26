const router = require('express').Router();

router.post('/users/:userId/followers/:followerId');

router.delete('/users/:userId/followers/:followerId')

module.exports = router;