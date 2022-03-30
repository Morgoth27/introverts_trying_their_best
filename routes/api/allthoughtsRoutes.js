const router = require('express').Router();

// router.get('/thoughts');
// router.get('/thoughts/:thoughtId');

// router.post('/thoughts/:thoughtId');

// router.put('/thoughts/:thoughtId');

// router.delete('/thoughts/:thoughtId')

const {
    getAllThoughts,
}  = require('../../controllers/thoughtsController')

router.route('/').get(getAllThoughts)

module.exports = router;