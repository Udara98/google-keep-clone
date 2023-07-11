import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const NavList = (open) => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon /> },
    { id: 2, name: "Reminders", icon: <NotificationsNoneOutlinedIcon /> },
    { id: 3, name: "Edit Labels", icon: <CreateOutlinedIcon /> },
    { id: 4, name: "Archive", icon: <ArchiveOutlinedIcon /> },
    { id: 5, name: "Trash", icon: <DeleteOutlinedIcon /> },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
