import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { downloadMd } from "../utils";

const Header = ({ editorText, setEditorText }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    if (!uploadedFile) return;

    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile);
    fileReader.onload = (e) => {
      setEditorText(e.target.result);
    };
  }, [setEditorText, uploadedFile]);

  const resetMd = () => {
    if (editorText.length === 0) {
      swal({
        text: "The editor is already clear!",
        icon: "info",
        button: "Ok",
      });
    } else {
      swal({
        text: "Are you sure you want to reset the Editor? This results in losing your work. To confirm, click Continue.",
        icon: "warning",
        button: "Continue",
      }).then(() => setEditorText(""));
    }
  };

  const onUploadClick = () => {
    swal({
      content: {
        element: "input",
        attributes: {
          type: "file",
          className: "upload-input",
          accept: ".md",
          onchange: (e) => {
            swal.close();
            setUploadedFile(e.target.files[0]);
          },
        },
      },
      button: {
        visible: false,
      },
    }).then(() => {
      return;
    });
  };

  return (
    <div className="header">
      <button className="reset-btn" onClick={resetMd}>
        Reset
      </button>
      <button className="download-btn" onClick={() => downloadMd(editorText)}>
        Download Markdown
      </button>
      <button className="upload-btn" onClick={onUploadClick}>
        Upload File
      </button>
    </div>
  );
};

export default Header;
