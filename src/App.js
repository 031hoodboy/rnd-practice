import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import GridContext from "./GridContext";
import "./styles.css";

import TextEditor from "./Components/TextEditor";

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [texts, setTexts] = useState([]);

  const onCreateBlock = () => {
    console.log("블록이 추가되었습니다.");
    setBlocks([blocks.length, ...blocks]);
  };

  const onCreateText = () => {
    console.log("블록이 추가되었습니다.");
    setTexts([texts.length, ...texts]);
  };

  return (
    <PageBlock>
      <div className="editor">
        <TextEditor />
      </div>
      <AddBlockWrapper>
        <AddBlock onClick={onCreateBlock}>Add Block</AddBlock>
        <AddBlock onClick={onCreateText}>Add Text Block</AddBlock>
      </AddBlockWrapper>
      {blocks.map((key) => (
        <Box
          default={{
            x: 200,
            y: 200,
            width: 200,
            height: 200,
            dragEndX: null,
            resizeEndX: null,
            resizeEndWidth: null,
          }}
          key={key}
        >
          <div contentEditable="true" placeholder="Type something..."></div>
        </Box>
      ))}
      {texts.map((key) => (
        <TextBlock
          default={{
            x: 200,
            y: 200,
            width: 200,
            minheight: 30,
            dragEndX: null,
            resizeEndX: null,
            resizeEndWidth: null,
          }}
          key={key}
        >
          <TextBox
            contentEditable="true"
            placeholder="Type something..."
          ></TextBox>
        </TextBlock>
      ))}
      {/* <GridContext /> */}
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const Box = styled(Rnd)`
  background-color: #fff;
  border: 1px solid #999;
  padding: 15px;
  border-radius: 1rem;
  &:active {
    opacity: 0.7;
    border: 1px dotted #222;
  }

  & > :focus {
    outline: 0px solid transparent;
  }
  [placeholder]:empty:before {
    content: attr(placeholder);
    color: #555;
  }
`;

const AddBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddBlock = styled.div`
  padding: 20px;
  height: 50px;
  background-color: #5e09dc;
  cursor: pointer;
  margin: 20px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:active {
    transform: scale(0.97);
  }
`;

const TextBlock = styled(Rnd)`
  width: 200px;
  height: 40px;
  border: 1px dotted #222;
  padding: 5px;

  & > :focus {
    outline: none;
  }
`;

const TextBox = styled.div`
  /* border: 1px dotted #222;
  &:active {
    border: 1px solid #222;
  } */
`;
export default App;
