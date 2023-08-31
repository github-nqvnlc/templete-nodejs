var express = require("express");
var router = express.Router();

const {
  CreateController,
  GetController,
  GetByIdController,
  UpdateController,
  DeleteController,
} = require("../controllers/CRUDController");

const {
  validateSchema,
  checkCreateSchema,
  checkIdSchema,
} = require("../utils");

router.post("/create", validateSchema(checkCreateSchema), CreateController);
router.get("/get", GetController);
router.get("/get/:id", validateSchema(checkIdSchema), GetByIdController);
router.put("/update/:id", validateSchema(checkIdSchema), UpdateController);
router.delete("/delete/:id", validateSchema(checkIdSchema), DeleteController);

module.exports = router;
