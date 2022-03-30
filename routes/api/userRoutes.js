const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController')

const {
    createThought
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser)
router.route('/:userId/thoughts/').put(createThought)
// router.get('/users');
// router.get('/users/:userId');

// router.post('/users/:userId');

// router.put('/users/:userId');

// router.delete('/users/:userId')

module.exports = router;