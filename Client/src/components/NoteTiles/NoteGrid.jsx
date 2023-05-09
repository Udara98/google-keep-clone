import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import NoteCard from "./NoteCard";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

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
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:3001/notes");
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotes();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        flexGrow: 1,
        position: "relative",
        top: "150px",
        width: "85vw",
        margin: "0 10vw",
      }}
    >
      <Masonry columns={7} spacing={2}>
        {notes.map((note) => (
          <Grid key={note._id}>
            <MemoNoteCard note={note} />
          </Grid>
        ))}
      </Masonry>
    </Box>
  );
}

export default BasicGrid;
