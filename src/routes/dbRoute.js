const multer = require("multer");
const upload = multer({ dest: "uploads" });
const router = require("express").Router();
const mahasiswaController = require("../controller/dbController");

router.get("/", mahasiswaController.index);
router.get("/:id", mahasiswaController.view);

module.exports = router;
