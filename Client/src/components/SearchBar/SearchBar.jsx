import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Card from "@mui/material/Card";
import { styled} from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";

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
  "@media (max-width: 800px)": {
    maxWidth:"40vw"
  }
});

const SearchBar = ({onChange }) => {
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
          marginTop:"6px",
          "@media (max-width: 800px)": {
            flexDirection: "row-reverse"
          }
          
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
          sx={{color: "#5f6368", marginLeft: "auto",  "@media (max-width: 800px)": {
            display: "none",
          }, }}
        />
      </CardContent>
    </StyledCard>
  );
};

export default SearchBar;
