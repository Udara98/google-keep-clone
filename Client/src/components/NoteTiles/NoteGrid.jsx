import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import NoteCard from "./NoteCard";
import axios from "axios";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ReactMasonary from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";
import ModalWindow from "../ModalWindow";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MemoNoteCard = React.memo(NoteCard);

function BasicGrid() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/notes?timestamp=" + Date.now()
        );
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotes();
  });

  const openModal = (note) => {
    setSelectedNote({ ...note });
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        flexGrow: 1,
        position: "relative",
        top: "150px",
        width: "94vw",
        margin: "0 5vw",
      }}
    >
      {selectedNote && (
        <ModalWindow
          open={selectedNote !== null}
          handleClose={closeModal}
          note={selectedNote}
          noteId={selectedNote._id}
        />
      )}

      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          890: 3,
          1200: 4,
          1830: 7,
          705: 2,
          1360: 5,
          1550: 6,
        }}
      >
        <ReactMasonary gutter={"8px"}>
          {notes.map((note) => (
            <Grid key={note._id} onClick={() => openModal(note)}>
              <MemoNoteCard note={note}  />
            </Grid>
          ))}
        </ReactMasonary>
      </ResponsiveMasonry>
    </Box>
  );
}

export default BasicGrid;
