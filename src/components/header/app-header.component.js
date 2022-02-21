import { Grid, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app-header.scss";
function AppHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Grid container className="app-header">
      <h3
        className="header-link"
        onClick={() => {
          navigate("/posts");
        }}
      >
        Posts
      </h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{ paddingRight: 20 + "px" }}
          color="inherit"
          onClick={() => {
            navigate("/create-post");
          }}
        >
          Create
        </Button>
        <Button
          style={{ paddingRight: 20 + "px", color: "white" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {props.user.firstName} {props.user.lastName}
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </MenuItem>

          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </Grid>
  );
}

export default AppHeader;
