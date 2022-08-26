const router = require("express").Router();
const {
  postOneSnippet,
  getAllSnippets,
  updateOneSnippet,
  deleteOneSnippet,
} = require("../controller/snippetController");

const auth = require("../middleware/auth");

router.post("/", auth, postOneSnippet);
router.get("/", auth, getAllSnippets);
router.put("/:id", auth, updateOneSnippet);
router.delete("/:id", auth, deleteOneSnippet);

module.exports = router;
