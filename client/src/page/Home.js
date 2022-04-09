import React, { useEffect, useState } from "react";
import Axios from "axios";

function Home() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    //get snippets
    getAllSnippets();
  }, []);

  async function getAllSnippets() {
    const snippetsRes = await Axios.get("http://localhost:3000/snippet");
    console.log(snippetsRes);
    setSnippets(snippetsRes.data);
  }

  return <>홈페이지 이다</>;
}
export default Home;
