const router = require("express").Router();
const { 회원가입 } = require("../controller/userController");

/**회원가입 */
router.post("/", 회원가입);
router.get("/");

module.exports = router;
