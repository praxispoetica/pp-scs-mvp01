var router = require('express').Router()

router.use(require('./authors'))
router.use(require('./videos'))
router.use(require('./assets'))
router.use(require('./users'))

module.exports = router
