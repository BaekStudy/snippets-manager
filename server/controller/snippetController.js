const SnippetModel = require("../models/snippetModel");

// Create
exports.postOneSnippet = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    console.log(req.body);

    const newSnippet = new SnippetModel({
      title,
      description,
      code,
    });

    await newSnippet.save();

    res.json(newSnippet);
  } catch (error) {
    res.json({
      controller: "postOneSnippet",
      success: false,
      message: error,
    });
  }
};
// Read
exports.getAllSnippets = (req, res) => {
  try {
  } catch (error) {
    res.json({
      controller: "getAllSnippets",
      success: false,
      message: error,
    });
  }
};
// Update
exports.updateOneSnippet = (req, res) => {
  try {
  } catch (error) {
    res.json({
      controller: "updateOneSnippet",
      success: false,
      message: error,
    });
  }
};
// Delete
exports.deleteOneSnippet = (req, res) => {
  try {
  } catch (error) {
    res.json({
      controller: "deleteOneSnippet",
      success: false,
      message: error,
    });
  }
};
