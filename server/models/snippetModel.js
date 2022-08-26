const mongoose = require("mongoose");

const SnippetModel = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    code: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("snippets", SnippetModel);
