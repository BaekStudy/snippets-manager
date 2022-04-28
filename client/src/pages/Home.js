import React, { useEffect, useState } from "react";
import Snippet from "../components/Home/Snippet";
import SnippetEditor from "../components/Home/SnippetEditor";
import Axios from "axios";

//홈 콤포넌트
function Home() {
  const [snippets, setSnippets] = useState([]); //빈 배열을 안해놔서 생긴 오류 발견 !
  const [newSnippetEditorOpen, setNewSnippetEditorOpen] = useState(false); // Form 태그 열게 할까 말까

  useEffect(() => {
    getAllSnippets();
  }, []);

  async function getAllSnippets() {
    const snippetsRes = await Axios.get("http://localhost:3000/snippet");
    console.log(snippetsRes);
    setSnippets(snippetsRes.data);
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
        />
      );
    });
  }

  return (
    <div className="home">
      <div className="snippetsContainer">
        {!newSnippetEditorOpen && (
          <button onClick={() => setNewSnippetEditorOpen(true)}>
            스니핏 추가
          </button>
        )}
        {newSnippetEditorOpen && (
          <SnippetEditor
            setNewSnippetEditorOpen={setNewSnippetEditorOpen}
            getAllSnippets={getAllSnippets}
          />
        )}
        {spreadSnippets()}
      </div>
    </div>
  );
}

export default Home;
