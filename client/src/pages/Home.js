import React, { useEffect, useState } from "react";
import Snippet from "../components/Snippet";
import Axios from "axios";

//홈 콤포넌트
function Home() {
  const [snippets, setSnippets] = useState([]); //빈 배열을 안해놔서 생긴 오류 발견 !

  useEffect(() => {
    getAllSnippets();
  }, []);

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

  return (
    <div className="home">
      <p>홈페이지</p>
      <div className="snippetsContainer">{spreadSnippets()}</div>
    </div>
  );
}

export default Home;
