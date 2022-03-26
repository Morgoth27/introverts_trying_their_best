const router = require('express').Router();

router.get('/thoughts');
router.get('/thoughts/:thoughtId');

router.post('/thoughts/:thoughtId');

router.put('/thoughts/:thoughtId');

router.delete('/thoughts/:thoughtId')

module.exports = router;