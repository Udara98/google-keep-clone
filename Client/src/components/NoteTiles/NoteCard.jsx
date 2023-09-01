import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CardActions from '@mui/material/CardActions';


const NoteCard = React.memo(({ note }) => {
  return (
    <Card
      sx={{
        borderColor: "#e0e0e0",
        border: "1px  ",
        fontFamily: "Roboto",
        display:"flex",
        flexDirection:"column",
        minHeight: "200px",
        maxHeight: "400px",
        textAlign: "left",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontFamily: "Roboto",
        opacity: "1",
        borderRadius: "8px",
        width: "225px",
        margin: "auto",
        boxShadow:
          "inset 0.1px 0.1px 0 rgba(0,0,0,.1), inset 0 -1px 0 rgba(0,0,0,.07)",

        "&:focus": {
          outline: "none",
        },
        p: 1,
        "@media(max-width: 705px)": {
          width: "75vw",
          marginLeft: "10vw",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          style={{ marginBottom: "1.5rem" }}
        >
          {note.title}
        </Typography>
        <Typography variant="body1" component="div">
          {note.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{marginTop:"auto"}} >
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
    </CardActions>   
    </Card>
  );
});

export default NoteCard;
