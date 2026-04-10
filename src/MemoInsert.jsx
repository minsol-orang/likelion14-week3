import { useState } from "react";
import React from 'react';
import styled from "styled-components";

const Buuton = styled.button`
  background-color : #ffbaba;
`;

function MemoInsert({putMemo}) {
    const [text, setText] = useState('');

    function onTextChange(e) {
        setText(e.target.value);
    }

    function onAddClick() {
      if(text) {
        putMemo(text);
        setText('');
      } else {
        alert("메모를 입력해주세요");
      }
    }

  }

  return (
    <>
      <div>
        <input type="text" placeholder="메모를 입력하세요" value={text} onChange={onTextChange}/>
        &nbsp;
        <Buuton onClick={onAddClick}>추가</Buuton>
      </div>   
    </>
    );


export default MemoInsert;