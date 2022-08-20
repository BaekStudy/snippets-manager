import React from "react";
import Axios from "axios";

// 스니핏 콤포넌트
function Snippet({
  snippet,
  getAllSnippets,
  속성아무거나,
  editSnippet,
  ...props
}) {
  //딜리트 Axios로 보내기
  async function deleteSnippet() {
    alert(`${snippet._id} 삭제함`);
    await Axios.delete(`http://localhost:3000/snippet/${snippet._id}`);
    getAllSnippets();
  }

  return (
    <div className="snippet">
      {속성아무거나}
      {snippet._id && <h2>{snippet._id}</h2>}
      {snippet.title && <h2>{snippet.title}</h2>}
      {snippet.description && <p>{snippet.description}</p>}
      {snippet.code && (
        <pre>
          <code>{snippet.code}</code>
        </pre>
      )}
      <button onClick={() => editSnippet(snippet)}>수정</button>
      <button onClick={deleteSnippet}>Delete</button>
      <hr />
    </div>
  );
}

/*
function Snippet({ snippet, 속성아무거나, ...props }) {
  return (
    <div className="snippet">
      {속성아무거나}
      {snippet.title && <h2>{snippet.title}</h2>}
      {snippet.description && <p>{snippet.description}</p>}
      {snippet.code && <p>{snippet.code}</p>}
      <hr />
    </div>
  );
}
*/

//비구조화 할당으로 받기
/*
function SnippetPropsMethodComponent(상위콤포넌트에서받은스니핏특정데이터,...스니핏콤포넌트의속성즉상위콤포넌트로부터받은데이터) {
  return (
    <div className="snippet">
      {스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.title && <h2>{스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.title}</h2>}

      {스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.description && <p>{스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.description}</p>}

      {스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.code && <p>{스니핏콤포넌트의속성즉상위콤포넌트로부터받은모든속성데이터.snippet.code}</p>}
      <hr />
    </div>
  );
}
*/
export default Snippet;
