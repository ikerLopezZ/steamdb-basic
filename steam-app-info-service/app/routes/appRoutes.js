const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.get('/apps', appController.getAllApps);
router.get('/:appID', appController.getAppDetails);
router.get('/search', appController.searchApps);

module.exports = router;
