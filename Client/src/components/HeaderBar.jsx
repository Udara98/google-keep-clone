import * as React from "react";
import { styled} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar/SearchBar";
import logo from "./logo/logo.png";


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

  <logo/>
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
        <SearchBar/>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
