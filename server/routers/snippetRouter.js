const router = require("express").Router();
const { postOneSnippet } = require("../controller/snippetController");

router.post("/", postOneSnippet);

router.get("/test", (req, res) => {
  res.send("Router test");
  console.log("라우터 테스트 동작");
});

module.exports = router;
