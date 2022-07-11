import React from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";

const cellWidth = 100;
const cellHeight = 100;

const App = () => (
  <>
    {[...Array(4).keys()].map((key) => (
      <Rnd
        default={{
          x: key * 200,
          y: key * 200,
          width: cellWidth * 2,
          height: 200,
        }}
        minWidth={cellWidth}
        minHeight={cellHeight}
        bounds="window"
      >
        <Box className="box" />
      </Rnd>
    ))}
  </>
);

const Box = styled.div`
  height: 100%;
  margin: 0;
  &:active {
    opacity: 0.7;
    border: 2px dotted #222;
  }
`;

export default App;
