import { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
  move,
} from "react-grid-dnd";

const cellWidth = 100;
const cellHeight = 100;
const granularity = 2;

const App = () => {
  const [items, setItems] = useState({
    left: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
      { id: 3, name: "3" },
      { id: 4, name: "4" },
      { id: 5, name: "5" },
    ],
  });

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (targetId) {
      const result = move(
        items[sourceId],
        items[targetId],
        sourceIndex,
        targetIndex
      );
      return setItems({
        ...items,
        [sourceId]: result[0],
        [targetId]: result[1],
      });
    }

    const result = swap(items[sourceId], sourceIndex, targetIndex);
    return setItems({
      ...items,
      [sourceId]: result,
    });
  }

  return (
    <>
      <GridContextProvider onChange={onChange}>
        <div className="container">
          <GridDropZone
            className="dropzone left"
            id="left"
            boxesPerRow={3}
            rowHeight={150}
          >
            {items.left.map((item) => (
              <GridItem key={item.name}>
                <div className="grid-item">
                  <div className="grid-item-content">
                    {item.name.toUpperCase()}
                  </div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </div>
      </GridContextProvider>
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
  &[contenteditable]:focus {
    outline: 0px solid transparent;
  }
`;

export default App;
