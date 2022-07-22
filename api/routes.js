const router = require("express").Router();

const useController = require("./controllers/useController");

router.get("/getConsultas", useController.getConsultas);
router.post("/createConsultas", useController.createConsulta);
router.post("/getConsulta", useController.getConsulta);

module.exports = router;
