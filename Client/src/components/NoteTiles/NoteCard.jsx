import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const NoteCard = ({ note }) => {
  return (
    <Card
      sx={{
        borderColor: "#e0e0e0",
        border: "1px  ",
        fontFamily: "Roboto",
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
          // boxShadow:
          //   "0px 3px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)",
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
};
