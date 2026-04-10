import { useState } from "react";
import MemoInsert from "./MemoInsert";
import MemoList from "./MemoList";
import styled from "styled-components";

const Container = styled.div`
  display : flex;
  align-items : center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffe0f7;
  flex-direction: column;
`;

function App() {
  const [text, setText] = useState('');
  const [memos, setMemos] = useState([]);

  function putMemo(text) {
    setMemos([text, ...memos]);
  }

  function onRemoveClick(index) {
    setMemos(memos.filter((memo) => memo != memos[index]));
  }

  
  return (
    <>
      <Container>
        <h1>MemoList</h1> <br />
        <MemoInsert putMemo={putMemo} />
        <MemoList memos={memos} onRemoveClick={onRemoveClick} />
      </Container>
      
    </>
  );
}

export default App;