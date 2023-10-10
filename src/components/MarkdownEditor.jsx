import React, {  } from "react";

const MarkdownEditor = ({ editorText, setEditorText }) => {
 

  return (
    <div className="editor">
      <textarea
        className="editor-txtarea"
        value={editorText}
        onChange={e => {
          setEditorText(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default MarkdownEditor;
