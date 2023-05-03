import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { NoteCard } from "./NoteCard";

const notes = [
  {
    id: 1,
    text: 'This is the first note',
  },
  {
    id: 2,
    text: 'This is the second note',
  },
  {
    id: 3,
    text: 'This is the third note',
  },
  {
    id: 4,
    text: 'This is the third note',
  },
];




export default function BasicGrid() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        position: "relative",
        top: "150px",
        width: "1040px",
        margin: "auto"
      }}
    >
      {notes.map((note) => (
        <Grid item key={note.id} xs={3} sm={3}>
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
}
