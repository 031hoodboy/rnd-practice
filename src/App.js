import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import GridContext from "./GridContext";
import Editor2 from "./Components/Editor2";

import "./styles.css";

// import TextEditor from "./Components/TextEditor";
const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [texts, setTexts] = useState([]);
  const [texboxId, setTextboxId] = useState();
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(true);
  const [underline, setUnderline] = useState(true);
  const [strike, setStrike] = useState(true);

  const onCreateBlock = () => {
    console.log("블록이 추가되었습니다.");
    setBlocks([blocks.length, ...blocks]);
  };

  const onCreateText = () => {
    console.log("텍스트 블록이 추가되었습니다.");
    setTexts([texts.length, ...texts]);
  };

  const handleClick = (event) => {
    const getTextboxid = event.currentTarget.id;
    console.log(getTextboxid);

    // setBold(false);
    // setItalic(false);
    // setUnderline(false);
    // setStrike(false);

    setTextboxId(getTextboxid);
  };

  const onBold = () => {
    if (bold === true) {
      document.getElementById(texboxId).style.fontWeight = "bold";
      document.getElementById("btn-bold").style.backgroundColor = "red";
    } else {
      document.getElementById(texboxId).style.fontWeight = "normal";
      document.getElementById("btn-bold").style.backgroundColor = "buttonface";
    }
    setBold(!bold);
  };

  const onItalic = () => {
    if (italic === true) {
      document.getElementById(texboxId).style.fontStyle = "italic";
      document.getElementById("btn-italic").style.backgroundColor = "red";
    } else {
      document.getElementById(texboxId).style.fontStyle = "normal";
      document.getElementById("btn-italic").style.backgroundColor =
        "buttonface";
    }
    setItalic(!italic);
  };

  const onUnderline = () => {
    if (underline === true) {
      document.getElementById(texboxId).style.textDecoration = "underline";
      document.getElementById("btn-underline").style.backgroundColor = "red";
    } else {
      document.getElementById(texboxId).style.textDecoration = "none";
      document.getElementById("btn-underline").style.backgroundColor =
        "buttonface";
    }

    setUnderline(!underline);
  };

  const onStrike = () => {
    if (strike === true) {
      document.getElementById(texboxId).style.textDecoration = "line-through";
      document.getElementById("btn-strike").style.backgroundColor = "red";
    } else {
      document.getElementById(texboxId).style.textDecoration = "none";
      document.getElementById("btn-strike").style.backgroundColor =
        "buttonface";
    }
    setStrike(!strike);
  };

  const onFontSize = (target) => {
    const fontSizeSelector = document.getElementById("select-font-size");
    console.log(fontSizeSelector.value);
    document.getElementById(
      texboxId
    ).style.fontSize = `${fontSizeSelector.value}px`;
  };

  const selectList = ["13", "16", "18", "24", "32", "48"];

  const [Selected, setSelected] = useState("16");

  const handleSelect = (e) => {
    console.log(Selected);

    setSelected(e.target.value);
    document.getElementById(texboxId).style.fontSize = `${e.target.value}px`;
  };

  return (
    <PageBlock>
      <div>
        <button id="btn-bold" onClick={onBold}>
          <b>B</b>
        </button>
        <button id="btn-italic" onClick={onItalic}>
          <i>I</i>
        </button>
        <button id="btn-underline" onClick={onUnderline}>
          <u>U</u>
        </button>
        <button id="btn-strike" onClick={onStrike}>
          <s>S</s>
        </button>
        <select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
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
          <TextBox
            contentEditable="true"
            placeholder="Type something..."
          ></TextBox>
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
            onClick={handleClick}
            id={`textbox${key}`}
          />
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
    outline: none;
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

  & > :focus {
    outline: none;
  }
  [placeholder]:empty:before {
    content: attr(placeholder);
    color: #555;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 5px;
  color: #000;
  border: 1px dotted transparent;
`;
export default App;
