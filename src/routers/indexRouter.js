const express = require("express");
const IndexController = require("../controllers/IndexController");

const router = express.Router();

router.get("/", IndexController.showIndex);
router.get("/contato", IndexController.showContato)
router.get('/servicos', IndexController.showServicos)
router.get('/sobre', IndexController.showSobre)


module.exports = router;
