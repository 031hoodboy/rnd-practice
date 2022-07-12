import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import GridContext from "./GridContext";
const cellWidth = 100;
const cellHeight = 100;
const granularity = 2;

const App = () => {
  return (
    <>
      <GridContext />
      {[...Array(4).keys()].map((key) => (
        <Box
          default={{
            x: (key * cellWidth) / granularity,
            y: key * 200 + 400,
            width: cellWidth * 2,
            height: 200,
            dragEndX: null,
            resizeEndX: null,
            resizeEndWidth: null,
          }}
          minWidth={cellWidth}
          minHeight={cellHeight}
          contenteditable="true"
        >
          <h1 contenteditable="true">{key}</h1>
        </Box>
      ))}
    </>
  );
};

const Box = styled(Rnd)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #999;
  padding: 15px;
  border-radius: 1rem;
  z-index: 1;
  &:active {
    opacity: 0.7;
    border: 2px dotted #222;
  }
  &:focus {
    outline: 0px solid transparent;
  }
`;

export default App;
