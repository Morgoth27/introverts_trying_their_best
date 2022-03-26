const router = require('express').Router();

router.get('/users');
router.get('/users/:userId');

router.post('/users/:userId');

router.put('/users/:userId');

router.delete('/users/:userId')

module.exports = router;