import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import parse from "html-react-parser";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    parsedText: "",
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onSaveValues = () => {
    const convertedToRaw = convertToRaw(
      this.state.editorState.getCurrentContent()
    );
    const convertedToHtml = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );
    console.log("convertedToRaw", convertedToRaw);
    console.log("convertedToHtml", convertedToHtml);

    this.setState({
      parsedText: convertedToHtml,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <button onClick={this.onSaveValues}>parse values</button>
        {this.state.parsedText && (
          <div>
            <div>
              The text parsed to HTML without using the dangerousInnerHTML
            </div>
            {parse(this.state.parsedText)}
          </div>
        )}
      </div>
    );
  }
}

export default EditorConvertToHTML;
