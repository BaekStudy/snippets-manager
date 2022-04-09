const mongoose = require("mongoose");

const SnippetModel = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    code: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("snippets", SnippetModel);
