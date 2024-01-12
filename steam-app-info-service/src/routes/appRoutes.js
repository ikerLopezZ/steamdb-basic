const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const verificarToken = require("../../auth");

router.get("/", verificarToken, appController.getAllApps);
router.get("/:appID", verificarToken, appController.getAppDetails);
// router.get("/search", verificarToken, appController.searchApps);

module.exports = router;
