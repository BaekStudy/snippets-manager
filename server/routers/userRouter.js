const router = require("express").Router();
const { 회원가입, 로그인 } = require("../controller/userController");

/**회원가입 */
router.post("/register", 회원가입);
router.post("/login", 로그인);

module.exports = router;
