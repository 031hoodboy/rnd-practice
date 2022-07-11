import React from "react";
import { Rnd } from "react-rnd";

const cellWidth = 100;
const cellHeight = 100;

const Box = () => (
  <div className="box" style={{ margin: 0, height: "100%" }}>
    test
  </div>
);

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
        <Box />
      </Rnd>
    ))}
  </>
);

export default App;
