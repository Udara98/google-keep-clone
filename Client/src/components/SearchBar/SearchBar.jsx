import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Card from "@mui/material/Card";
import { styled, useTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const StyledCard = styled(Card)({
  
  display: "flex",
  overflow: "hidden",
  border: "1px solid transparent",
  fontFamily: "Roboto",
  textAlign: "left",
  borderRadius: "8px",
  marginLeft: "7vw",
  width: "615px",
  backgroundColor: "#f1f3f4",
  height: "45px",
  position: "relative",
  boxShadow: "none",
});

const StyledInput = styled(Input)({
  width: "90%",
  borderBottom: "none",
  "& input": {
    border: "none",
  },
  "&::before": {
    display: "none",
  },
  "&::after": {
    display: "none",
  },
  marginLeft: "20px",
  textAlign: "center",
});

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <StyledCard>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          border: "none",
          boxSizing: "border-box",
          marginTop:"6px"
        }}
      >
        <SearchOutlinedIcon sx={{ color: "#5f6368"}} />
        <StyledInput
          placeholder="Search"
          onChange={onChange}
          sx={{ border: "none",
        }}
        />
        <CloseIcon
          sx={{color: "#5f6368", marginLeft: "auto" }}
        />
      </CardContent>
    </StyledCard>
  );
};

export default SearchBar;
