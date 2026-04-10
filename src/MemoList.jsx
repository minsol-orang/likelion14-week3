import React from 'react';
import styled from "styled-components";


const Buuton = styled.button`
  background-color : #ffbaba;
  border-radius: 5px;
  height : 27px;
  border : 2px solid #000000;
`;
const MemoBox = styled.div`
  background-color : white;
  width : 300px;
  height : 35px;
  border-radius : 10px;
  display : flex; 
  justify-content : space-between;
  align-items : center;
  padding-left : 10px;
  padding-right : 10px;

`;
const Container = styled.div`
  display : flex;
  background-color: #ffe0f7;
  flex-direction: column;  
  align-content : center;
  gap : 8px;
`;


function MemoList({memos, onRemoveClick}) {
  return (
    <Container>
      {
        memos.map((memo, index) => (
          <MemoBox>
            {memo} 
            <Buuton onClick={() => onRemoveClick(index)}>삭제</Buuton>
          </MemoBox>
        ))
      }
    </Container>
  );
}

export default MemoList;