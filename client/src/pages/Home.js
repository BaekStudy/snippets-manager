import React, { useEffect, useState } from "react";
import Snippet from "../components/Snippet";
import Axios from "axios";

//홈 콤포넌트
function Home() {
  const [snippets, setSnippets] = useState([]); //빈 배열을 안해놔서 생긴 오류 발견 !
  const [newSnippetEditorOpen, setNewSnippetEditorOpen] = useState(false); // Form 태그 열게 할까 말까
  const [editorTitle, setEditorTitle] = useState(""); // 인풋박스에 적은 벨류값 저장
  const [editorDescription, setEditorDescription] = useState("");
  const [editorCode, setEditorCode] = useState("");

  useEffect(() => {
    getAllSnippets();
  }, []);

  useEffect(() => {
    console.log("제목:" + editorTitle);
    console.log("내용:" + editorDescription);
    console.log("코드:" + editorCode);
  }, [editorTitle, editorDescription, editorCode]);

  async function getAllSnippets() {
    const snippetsRes = await Axios.get("http://localhost:3000/snippet");
    console.log(snippetsRes);
    setSnippets(snippetsRes.data);
  }

  function spreadSnippets() {
    return snippets.map((snippet, i) => {
      return (
        <Snippet 속성아무거나="속성아무거나줌" snippet={snippet} key={i} />
      );
    });
  }

  async function saveSnippet(e) {
    e.preventDefault();

    const snippetData = {
      title: editorTitle ? editorTitle : undefined,
      description: editorDescription ? editorDescription : undefined,
      code: editorCode ? editorCode : undefined,
    };

    await Axios.post("http://localhost:3000/snippet/", snippetData);
  }

  return (
    <div className="home">
      <p>홈페이지</p>
      <div className="snippetsContainer">
        {!newSnippetEditorOpen && (
          <button onClick={() => setNewSnippetEditorOpen(true)}>
            스니핏 추가
          </button>
        )}
        {newSnippetEditorOpen && (
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
            </form>
            <hr />
          </div>
        )}
        {spreadSnippets()}
      </div>
    </div>
  );
}

export default Home;
