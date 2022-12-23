const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/adminController");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({
  storage: storage
});

router.get("/", admin_controller.admin_page);

router.get("/users", admin_controller.users_page);

router.get("/addProject",  upload.array("images", 12), admin_controller.add_project_page);

module.exports = router;