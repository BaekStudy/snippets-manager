import React, { useEffect, useState } from "react";
import Axios from "axios";

function Home() {
  const [snippets, setSnippets] = useState();

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
      <div className="snippets">{spreadSnippets()}</div>
    </div>
  );
}

function Snippet(props) {
  return (
    <div className="snippet">
      {props.snippet.title && <h2>{props.snippet.title}</h2>}
    </div>
  );
}

export default Home;
