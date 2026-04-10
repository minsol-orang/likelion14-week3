import React from 'react';
import styled from "styled-components";


const Buuton = styled.button`
  background-color : #ffbaba;
`;

function MemoList({memos, onRemoveClick}) {
  return (
    <>
      {
        memos.map((memo, index) => (
          <div>
            {memo} 
            &nbsp;
            <Buuton onClick={() => onRemoveClick(index)}>삭제</Buuton>
          </div>
        ))
      }
    </>
  );
}

export default MemoList;