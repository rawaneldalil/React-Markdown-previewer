import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  const [editorText, setEditorText] = useState("");

  return (
    <div className="App">
      <Header editorText={editorText} setEditorText={setEditorText} />

      <div className="markdown-container">
        <MarkdownEditor editorText={editorText} setEditorText={setEditorText} />
        <MarkdownPreviewer editorText={editorText} />
      </div>
    </div>
  );
}

export default App;
