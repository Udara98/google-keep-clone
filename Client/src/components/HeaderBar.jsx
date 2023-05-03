import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import SearchBar from "./SearchBar/SearchBar";



const drawerWidth = 240;
const Header = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  color: #5f6368;
  height: 64px;
  -webkit-box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 20px;
  margin-left: 15px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png";
  return (
    <Header position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: "44px", height: "44px", }} />
        <Typography variant = "h2" >
          <Heading> Keep</Heading>
        </Typography>
        <SearchBar />
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
