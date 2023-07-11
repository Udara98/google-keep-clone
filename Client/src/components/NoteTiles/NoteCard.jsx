import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NoteCard = React.memo(({ note }) => {
  return (
    <Card
      sx={{
        borderColor: "#e0e0e0",
        border: "1px  ",
        fontFamily: "Roboto",
        minHeight: "200px",
        maxHeight: "400px",
        textAlign: "left",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontFamily: "Roboto",
        opacity: "1",
        borderRadius: "8px",
        width: "225px",
        margin:"auto",
        boxShadow:
          "inset 0.1px 0.1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)",

        "&:focus": {
          outline: "none",
        },
        p:1
      }}
    >
      <CardContent>
      <Typography variant="h6" component="div" style={{marginBottom:"1.5rem"}}>
          {note.title}
        </Typography>
        <Typography variant="body1" component="div">
          {note.text}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default NoteCard;
