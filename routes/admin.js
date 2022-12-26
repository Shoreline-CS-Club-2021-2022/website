const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/adminController");
const projects_controller = require("../controllers/projectsController");
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

router.get("/addProject",  upload.array("images", 12), projects_controller.add_project_page);

router.post("/newproject", upload.array("images", 12), projects_controller.new_project_post);
router.post("/edit/:projectID", upload.array("images", 12), projects_controller.edit_project_post);
router.post("/delete/:projectID", projects_controller.delete_project);
router.post("/delimage/:projectID/:imageIndex", projects_controller.delete_image);

module.exports = router;