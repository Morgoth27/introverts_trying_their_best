const router = require('express').Router();

// router.get('/thoughts');
// router.get('/thoughts/:thoughtId');

// router.post('/thoughts/:thoughtId');

// router.put('/thoughts/:thoughtId');

// router.delete('/thoughts/:thoughtId')

const {
    getThoughtById,
    createThought,
    deleteThought,
    updateThought
}  = require('../../controllers/thoughtsController')

router.route('/').post(createThought)

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// router.go(n)
router.route('/:userId/thoughts/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought)

module.exports = router;