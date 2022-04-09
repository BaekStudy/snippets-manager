const router = require("express").Router();
const {
  postOneSnippet,
  getAllSnippets,
  updateOneSnippet,
  deleteOneSnippet,
} = require("../controller/snippetController");

router.post("/", postOneSnippet);
router.get("/", getAllSnippets);
router.put("/:id", updateOneSnippet);
router.delete("/:id", deleteOneSnippet);

module.exports = router;
