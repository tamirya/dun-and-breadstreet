let express = require("express");
let router = express.Router();
let search_controller = require("../controllers/searchController");
router.get("/", search_controller.run);

module.exports = router;
