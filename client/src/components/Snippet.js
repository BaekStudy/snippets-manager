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
