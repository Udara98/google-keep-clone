import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const NoteCard = React.memo(({ note }) => {
  return (
    <Card
      sx={{
        borderColor: "#e0e0e0",
        border: "1px  ",
        fontFamily: "Roboto",
        minHeight: "150px",
        maxHeight: "400px",
        textAlign: "left",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontFamily: "Roboto",
        opacity: "1",
        borderRadius: "8px",
        boxShadow:
          "inset 0.1px 0.1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)",

        "&:focus": {
          outline: "none",
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {note.text}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default NoteCard;
