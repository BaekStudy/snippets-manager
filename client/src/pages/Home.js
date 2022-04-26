import React, { useEffect, useState } from "react";
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
      return <Snippet snippet={snippet} key={i} />;
    });
  }

  return (
    <div className="home">
      <p>홈페이지</p>
      <div className="snippetsContainer">{spreadSnippets()}</div>
    </div>
  );
}

// 스니핏 콤포넌트
function Snippet({ snippet, ...props }) {
  return (
    <div className="snippet">
      {snippet.title && <h2>{snippet.title}</h2>}
      {snippet.description && <p>{snippet.description}</p>}
      {snippet.code && <p>{snippet.code}</p>}
      <hr />
    </div>
  );
}

/* 비구조화 할당
function SnippetPropsMethod({...props}) {
  return (
    <div className="snippet">
      {props.snippet.title && <h2>{props.snippet.title}</h2>}
      {props.snippet.description && <p>{props.snippet.description}</p>}
    </div>
  );
}
*/

export default Home;
