import React, { useState, useEffect } from "react";
import Axios from "axios";

function SnippetEditor({
  getAllSnippets,
  setSnippetEditorOpen,
  editSnippetData,
  setEditSnippetData,
  ...props
}) {
  const [editorId, setEditorId] = useState("");
  const [editorTitle, setEditorTitle] = useState(""); // 인풋박스에 적은 벨류값 저장
  const [editorDescription, setEditorDescription] = useState("");
  const [editorCode, setEditorCode] = useState("");

  useEffect(() => {
    if (editSnippetData) {
      setEditorTitle(editSnippetData.title ? editSnippetData.title : "");
      setEditorDescription(
        editSnippetData.description ? editSnippetData.description : ""
      );
      setEditorCode(editSnippetData.code ? editSnippetData.code : "");
    }
  }, [editSnippetData]);

  function closeEditor() {
    setSnippetEditorOpen(false); // 상태관리도 콤포넌트의 속성으로 전달이 가능하다 !
    setEditorTitle("");
    setEditorDescription("");
    setEditorCode("");
    setEditSnippetData(null);
    alert("hello");
  }

  async function saveSnippet(e) {
    e.preventDefault();

    const snippetData = {
      id: editorId ? editorId : undefined,
      title: editorTitle ? editorTitle : undefined,
      description: editorDescription ? editorDescription : undefined,
      code: editorCode ? editorCode : undefined,
    };

    if (!editSnippetData) {
      await Axios.post("http://localhost:3000/snippet/", snippetData);
    } else {
      await Axios.put(
        `http://localhost:3000/snippet/${editSnippetData._id}`,
        snippetData
      );
    }
    getAllSnippets(); // 함수도 콤포넌트의 속성으로 전달이 가능하다 !
    closeEditor();
  }

  return (
    <div className="snippet-editor">
      <form onSubmit={saveSnippet}>
        <label htmlFor="editor-title">Title</label>
        <input
          id="editor-title"
          type="text"
          value={editorTitle}
          onChange={(e) => setEditorTitle(e.target.value)}
        />

        <label htmlFor="editor-description">Description</label>
        <input
          id="editor-description"
          type="text"
          value={editorDescription}
          onChange={(e) => setEditorDescription(e.target.value)}
        />

        <label htmlFor="editor-code">Code</label>
        <textarea
          id="editor-code"
          type="text"
          value={editorCode}
          onChange={(e) => setEditorCode(e.target.value)}
        />

        <button type="submit">Save snippet</button>
        <button onClick={closeEditor}>취소</button>
      </form>
      <hr />
    </div>
  );
}

export default SnippetEditor;
