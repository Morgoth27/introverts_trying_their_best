const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const followersRoutes = require('./followersRoutes');
const reactionRoutes = require('./reactionRoutes')

router.use('/users', userRoutes, followersRoutes);
router.use('/thoughts', thoughtsRoutes, reactionRoutes);
// router.use('/followers', followersRoutes)

module.exports = router;