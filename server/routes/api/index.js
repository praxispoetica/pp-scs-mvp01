var router = require('express').Router()

router.use(require('./assets'))
router.use(require('./texts'))
router.use(require('./users'))
router.use(require('./videos'))
router.use(require('./writers'))

module.exports = router
