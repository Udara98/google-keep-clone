import * as React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styled from "@emotion/styled";
import axios from "axios";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import IconButton from '@mui/material/IconButton';

const AutoSizeTextArea = styled(TextareaAutosize)({
  display: "block",
  overflow: "hidden",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  opacity: "1",
  margin: "auto",
  position: "relative",
  top: "100px",
  width: "600px",
  fontSize: "15px",
  resize: "none",
  borderRadius: "8px",
  boxShadow:
    "0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",

  "&:focus": {
    outline: "none",
    boxShadow:
      "0px 3px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",
  },

  "::placeholder": {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    color: "#202124",
  },
  padding: "13px 16px 0px 10px",
});

const AddNote = () => {
  const [text, setText] = React.useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/notes/addnote", {
        text: text,
      });
      console.log(response.data);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = (e) => {
    if (text.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AutoSizeTextArea
        aria-label="minimum height"
        minRows={2}
        placeholder="Take a note..."
        value={text}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default AddNote;
