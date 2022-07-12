import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import GridContext from "./GridContext";
const cellWidth = 100;
const cellHeight = 100;
const granularity = 2;

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const onCreate = () => {
    setBlocks([blocks.length, ...blocks]);
  };
  return (
    <PageBlock>
      <AddRnd onClick={onCreate}>Add Block</AddRnd>
      {blocks.map((key) => (
        <Box
          default={{
            x: 200,
            y: 200,
            width: cellWidth * 2,
            height: 200,
            dragEndX: null,
            resizeEndX: null,
            resizeEndWidth: null,
          }}
          minWidth={cellWidth}
          minHeight={cellHeight}
        >
          <span contenteditable="true">contenteditable</span>
        </Box>
      ))}
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
    border: 2px dotted #222;
  }
  & > :focus {
    outline: 0px solid transparent;
  }
`;

const AddRnd = styled.div`
  width: 100px;
  height: 50px;
  background-color: #5e09dc;
  cursor: pointer;
  margin: 20px auto;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:active {
    transform: scale(0.97);
  }
`;
export default App;
