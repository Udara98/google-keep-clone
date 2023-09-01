import * as React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/joy/Stack";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { Grid } from "@mui/material";

const StyledCard = styled(Card)({
  fontFamily: "Roboto",
  backgroundColor: "#ffff",
  boxShadow: "none",
});

const StyledTextFields = styled(TextField)({
  overflow: "hidden",
  boxSizing: "border-box",
  fontFamily: "Roboto",
  opacity: "1",
  width: "100%",
  fontSize: "15px",
  resize: "none",
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    border: "none",
    padding: "0px",
  },
  height: "auto",
  maxHeight: "50vh",
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "::placeholder": {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    color: "#202124",
  },
  border: "none",
  "& fieldset": { border: "none" },
  maxHeight: "50vh",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "9px",
    visibility: "hidden",
  },
  "&:hover::-webkit-scrollbar": {
    visibility: "visible",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.2)",
    borderRadius: "2px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
});

const AddNoteForm = ({
  title,
  note,
  handleInputChangeTitle,
  handleInputChangeNote,
  handleSubmit,
  handleBlur,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledTextFields
          tyle={{ flex: 1 }}
          id="outlined-textarea"
          value={title}
          onChange={handleInputChangeTitle}
          onBlur={handleBlur}
          placeholder="Title"
          multiline
        />

        <IconButton fontSize="small" style={{ marginLeft: "auto" }}>
          <PushPinOutlinedIcon />
        </IconButton>
      </div>
      <StyledTextFields
        id="outlined-textarea"
        value={note}
        onChange={handleInputChangeNote}
        onBlur={handleBlur}
        placeholder="Take a note..."
        multiline
      />
    </form>
  );
};

const AddNote = () => {
  const [title, setTextTitle] = React.useState("");

  const [note, setTextNote] = React.useState("");

  const handleInputChangeTitle = (event) => {
    setTextTitle(event.target.value);
  };
  const handleInputChangeNote = (event) => {
    setTextNote(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/notes/addnote", {
        note: note,
        title: title,
      });
      console.log(response.data);
      setTextNote("");
      setTextTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = (e) => {
    if (note.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <Stack
      sx={{
        width: "40vw",
        "@media (max-width: 900px)": {
          width: "75vw",
          marginLeft: "17vw",
          paddingRight: "1rem",
        },
        margin: "auto",
        position: "relative",
        top: "100px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow:
          "0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",
      }}
    >
      <AddNoteForm
        note={note}
        handleInputChangeTitle={handleInputChangeTitle}
        handleInputChangeNote={handleInputChangeNote}
        title={title}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
      />
      <StyledCard>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            boxSizing: "border-box",
            padding: "0",
            paddingBottom: "0",
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <Grid
            container
            sx={{
              "@media (max-width: 500px)": {
                direction: "row",
              },
            }}
          >
            <Grid container xs={12}>
              <IconButton fontSize="0.5">
                <NotificationAddOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <PersonAddAltOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <ColorLensOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <ImageOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <ArchiveOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <MoreVertOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <UndoOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton fontSize="small">
                <RedoOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton sx={{ marginLeft: "auto",fontSize:"18px" }}>close</IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Stack>
  );
};

export default AddNote;
export { AddNoteForm };
