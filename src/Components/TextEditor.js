import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import DraftDefaultConfig from "./config";
import { Rnd } from "react-rnd";
import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //   console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open("POST", "https://api.imgur.com/3/image");

      const data = new FormData(); // eslint-disablxhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');e-line no-undef
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }
  return (
    <div>
      <Editor
        {...DraftDefaultConfig}
        toolbarOnHidden
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
          },
        }}
      ></Editor>
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
        //   key={key}
      >
        <TextBox
          contentEditable="true"
          placeholder="Type something..."
        ></TextBox>
      </TextBlock>
      <textarea
        className="textarea"
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      ></textarea>
      {/* <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      /> */}
    </div>
  );
};

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
  width: 100%;
  height: 100%;
  /* border: 1px dotted #222;
  &:active {
    border: 1px solid #222;
  } */
`;

export default TextEditor;
