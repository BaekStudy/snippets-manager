import React, { useEffect, useState } from "react";
import Snippet from "../components/Home/Snippet";
import SnippetEditor from "../components/Home/SnippetEditor";
import Navbar from "../components/Home/Navbar";

import Axios from "axios";

//홈 콤포넌트
function Home() {
  const [snippets, setSnippets] = useState([]); //빈 배열을 안해놔서 생긴 오류 발견 !
  const [SnippetEditorOpen, setSnippetEditorOpen] = useState(false); // Form 태그 열게 할까 말까
  const [editSnippetData, setEditSnippetData] = useState(null);

  useEffect(() => {
    getAllSnippets();
  }, []);

  async function getAllSnippets() {
    const snippetsRes = await Axios.get("http://localhost:3000/snippet");
    console.log(snippetsRes);
    setSnippets(snippetsRes.data);
  }

  function editSnippet(snippetData) {
    setEditSnippetData(snippetData);
    setSnippetEditorOpen(true);
  }

  function spreadSnippets() {
    let sortedSnippets = [...snippets];

    // 크리에이티 순으로 배열 바꿔서 나타내기
    sortedSnippets = sortedSnippets.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sortedSnippets.map((snippet, i) => {
      return (
        <Snippet
          속성아무거나="속성아무거나줌"
          snippet={snippet}
          key={i}
          getAllSnippets={getAllSnippets}
          editSnippet={editSnippet}
        />
      );
    });
  }

  return (
    <div className="home">
      <Navbar />

      <div className="snippetsContainer">
        {!SnippetEditorOpen && (
          <button onClick={() => setSnippetEditorOpen(true)}>
            스니핏 추가
          </button>
        )}
        {SnippetEditorOpen && (
          <SnippetEditor
            setSnippetEditorOpen={setSnippetEditorOpen}
            getAllSnippets={getAllSnippets}
            editSnippetData={editSnippetData}
            setEditSnippetData={setEditSnippetData}
          />
        )}
        {spreadSnippets()}
      </div>
    </div>
  );
}

export default Home;
