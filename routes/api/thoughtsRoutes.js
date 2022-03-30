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
    updateThought,
    getAllThoughts,
}  = require('../../controllers/thoughtsController')

router.route('/').post(createThought).get(getAllThoughts)

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// router.go(n)
router.route('/:userId/thoughts/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought)

module.exports = router;