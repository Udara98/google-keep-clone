
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


import { AddNoteForm } from "./AddNote";

const StyledCard = styled(Card)({
  fontFamily: "Roboto",
  backgroundColor: "#ffff",
  boxShadow: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-20%)",
  width: "45vw",
  "@media(max-width: 800px)": {
    width: "100vw",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

export default function ModalWindow({ open, handleClose, note, noteId }) {
  const [noteEdit, setTextNote] = React.useState(note.text);
  const [titleEdit, setTitle] = React.useState(note.title);

  const handleNoteChange = (event) => {
    setTextNote(event.target.value);
  };
  const handleInputChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/notes/updateNote/${noteId}`,
        {
          text: noteEdit,
          title: titleEdit,
        }
      );
      console.log(response.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = (e) => {
    handleSubmit(e);
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/notes/deleteNote/${noteId}`
      );
      console.log(response.data);
      handleClose(); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuClose = (e) => {
    if (e.target.innerText === "Delete note") {
      handleDeleteNote();
    }
    setAnchorEl(null);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div style={{ outline: "none" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ maxHeight: "50vh", border: "0" ,outline: "none"}}
      >
        <Box sx={{ ...style}}>
          <AddNoteForm
            handleInputChangeNote={handleNoteChange}
            handleInputChangeTitle={handleInputChangeTitle}
            note={noteEdit}
            title={titleEdit}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
          />
          <StyledCard style={{ marginTop: "auto" }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "left",
                boxSizing: "border-box",
                padding: "0",
                ColumnGap: "1px",
                padding: "0",
                paddingBottom: "0",
                "&:last-child": {
                  paddingBottom: 0,
                }
              }}
            >
              <IconButton fontSize="small">
                <NotificationAddOutlinedIcon />
              </IconButton>
              <IconButton fontSize="small">
                <PersonAddAltOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton fontSize="small">
                <ColorLensOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton fontSize="small">
                <ImageOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton fontSize="small">
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton 
              fontSize="small"
              onClick={handleMenuOpen}>
                <MoreVertOutlinedIcon 
                fontSize="small" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Delete note</MenuItem>
                <MenuItem onClick={handleMenuClose}>Add label</MenuItem>
                <MenuItem onClick={handleMenuClose}>Add drawing</MenuItem>
                <MenuItem onClick={handleMenuClose}>Make a copy</MenuItem>
                <MenuItem onClick={handleMenuClose}>Show checkboxes </MenuItem>
                <MenuItem onClick={handleMenuClose}>Copy to Google Docs</MenuItem>
              </Menu>
              <IconButton fontSize="small">
                <UndoOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton fontSize="small">
                <RedoOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton
                fontSize="small"
                sx={{ marginLeft: "auto", marginRight: "2vw" }}
                onClick={handleClose}
              >
                close
              </IconButton>
            </CardContent>
          </StyledCard>
        </Box>
      </Modal>
    </div>
  );
}
