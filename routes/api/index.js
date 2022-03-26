const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require ('./thoughtsRoutes');
const followersRoutes = require ('./followersRoutes')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/followers', followersRoutes)

module.exports = router