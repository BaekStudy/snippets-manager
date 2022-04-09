const snippetModel = require("../models/snippetModel");

// Create [v]
exports.postOneSnippet = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    // validation
    if (!description && !code) {
      return res.json({
        errorMessage: "You need to enter at least a description or some code.",
      });
    }

    const newSnippet = new snippetModel({
      title,
      description,
      code,
    });

    const savedSnippet = await newSnippet.save();
    res.json(savedSnippet);
  } catch (error) {
    console.log(error);
    res.json({
      controller: "postOneSnippet",
      success: false,
      message: error,
    });
  }
};
// Read [v]
exports.getAllSnippets = async (req, res) => {
  try {
    const snippets = await snippetModel.find();
    res.json(snippets);
  } catch (error) {
    res.json({
      controller: "getAllSnippets",
      success: false,
      message: error,
    });
  }
};
// Update [v]
exports.updateOneSnippet = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    const snippetId = req.params.id;

    // validation
    if (!description && !code) {
      return res.json({
        errorMessage: "You need to enter at least a description or some code.",
      });
    }
    if (!snippetId) {
      return res.json({ errorMessage: "Snippet ID not given." });
    }

    const originalSnippet = await snippetModel.findById(snippetId);
    if (!originalSnippet) {
      return res.json({
        errorMessage: "No snippet ID",
      });
    }

    originalSnippet.title = title;
    originalSnippet.description = description;
    originalSnippet.code = code;

    const updatedSnippet = await originalSnippet.save();
    res.json(updatedSnippet);
  } catch (error) {
    res.json({
      controller: "updateOneSnippet",
      success: false,
      message: error,
    });
  }
};
// Delete [v]
exports.deleteOneSnippet = async (req, res) => {
  try {
    // validation
    const snippetId = req.params.id;

    if (!snippetId) {
      return res.json({ errorMessage: "Snippet ID not given." });
    }

    const existingSnippet = await snippetModel.findById(snippetId);
    if (!existingSnippet) {
      return res.json({
        errorMessage: "No snippet ID",
      });
    }

    await existingSnippet.delete();
    res.json(existingSnippet);
  } catch (error) {
    console.log(error);
    res.json({
      controller: "deleteOneSnippet",
      success: false,
      message: error,
    });
  }
};
