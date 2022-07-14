import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import styled from "styled-components";
import uuid from "react-uuid";
import Header from "./Components/Header";

import "./styles.css";

// import TextEditor from "./Components/TextEditor";
const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [texts, setTexts] = useState([]);
  const [circles, setCircles] = useState([]);

  const [texboxId, setTextboxId] = useState();
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(true);
  const [underline, setUnderline] = useState(true);
  const [strike, setStrike] = useState(true);

  const onCreateBlock = () => {
    console.log("블록이 추가되었습니다.");
    setBlocks([uuid(), ...blocks]);
  };

  const onCreateText = () => {
    console.log("텍스트 블록이 추가되었습니다.");
    setTexts([uuid(), ...texts]);
  };

  const onCreateCircle = () => {
    console.log("원 블록이 추가되었습니다.");
    setCircles([uuid(), ...circles]);
  };

  const getTextboxid = (e) => {
    const textboxid = e.currentTarget.id;
    // console.log(getTextboxid);

    // setBold(false);
    // setItalic(false);
    // setUnderline(false);
    // setStrike(false);

    setTextboxId(textboxid);
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

  const fontsizeList = ["font size", "10", "13", "16", "18", "24", "32", "48"];

  const fontsizeSelect = (e) => {
    document.getElementById(texboxId).style.fontSize = `${e.target.value}px`;
  };

  return (
    <PageBlock>
      <Header />
      <MapEditBlock>
        <AddBlockWrapper>
          <AddBlock onClick={onCreateBlock}>Add Block</AddBlock>
          <AddBlock onClick={onCreateText}>Add Text Block</AddBlock>
          <AddBlock onClick={onCreateCircle}>Add Circle Block</AddBlock>
          <StyleBlockWrapper>
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
            <select onChange={fontsizeSelect}>
              {fontsizeList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </StyleBlockWrapper>
        </AddBlockWrapper>

        <Map src={require(`./assets/map.png`)} />

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
              onClick={getTextboxid}
              id={key}
            ></TextBox>
          </Box>
        ))}
        {texts.map((key) => (
          <TextBlock
            default={{
              x: 200,
              y: 200,
              dragEndX: null,
              resizeEndX: null,
              resizeEndWidth: null,
            }}
            key={key}
          >
            <TextBox
              contentEditable="true"
              placeholder="Type something..."
              onClick={getTextboxid}
              id={key}
            />
          </TextBlock>
        ))}
        {circles.map((key) => (
          <CircleBox
            default={{
              x: 200,
              y: 200,
            }}
            key={key}
          ></CircleBox>
        ))}
        {/* <GridContext /> */}
      </MapEditBlock>
    </PageBlock>
  );
};

const PageBlock = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f9fc;
  padding-top: 65px;
`;

const Map = styled.img`
  min-width: 1247px;
  height: 800px;
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
    color: #aaa;
  }
`;

const CircleBox = styled(Box)`
  background: none;
  border-radius: 100%;
  border: 5px solid red;
  padding: none;
`;

const MapEditBlock = styled.div`
  width: 1247px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 65px;
  left: 288px;
`;

const AddBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1247px;
  margin: 20px 0;
`;

const AddBlock = styled.div`
  padding: 10px;
  background-color: #5e09dc;
  cursor: pointer;
  margin: 0 10px;
  font-size: 12px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:active {
    transform: scale(0.97);
  }
`;

const StyleBlockWrapper = styled.div``;

const TextBlock = styled(Rnd)`
  border: 1px dotted #222;
  & > :focus {
    outline: none;
  }
  [placeholder]:empty:before {
    content: attr(placeholder);
    color: #aaa;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 8px;
  outline: none;
  color: #000;
  border: 1px dotted transparent;
`;

export default App;
