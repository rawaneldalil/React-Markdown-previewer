import swal from "sweetalert";
import fileDownload from "js-file-download";


export const downloadMd = (text) => {
    if (text.length === 0) {
      swal({
        text: "You've not added any text yet!",
        icon: "info",
        button: "Ok",
      });
    } else {
      fileDownload(text, "markdown.md");
    }
  };
