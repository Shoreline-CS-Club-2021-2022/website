const express = require("express");
const router = express.Router();
const api_controller = require("../controllers/APIController.js")

router.route("/:api_key")
.get(api_controller.api_get)
.post(api_controller.api_post)
.patch(api_controller.api_patch)
.delete(api_controller.api_delete);

module.exports = router;