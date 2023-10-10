import React from "react";
import { marked } from "marked";

const MarkdownPreviewer = ({ editorText }) => {
  return (
    <div
      className="previewer"
      dangerouslySetInnerHTML={{ __html: marked(editorText) }}
    ></div>
  );
};

export default MarkdownPreviewer;
