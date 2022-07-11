import React from "react";
import { Rnd } from "react-rnd";

const cellWidth = 200;
const cellHeight = 200;

const Box = () => (
  <div className="box" style={{ margin: 0, height: "100%" }}>
    test
  </div>
);

const App = () => (
  <Rnd
    default={{
      x: 0,
      y: 0,
      width: cellWidth * 2,
      height: 200,
    }}
    minWidth={cellWidth}
    minHeight={cellHeight}
    bounds="window"
  >
    <Box />
  </Rnd>
);

export default App;
