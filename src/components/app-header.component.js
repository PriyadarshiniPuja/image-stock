import { Grid, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import history from "../services/history";
function AppHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("login");
    window.location.reload();
  };
  return (
    <Grid
      container
      style={{
        backgroundColor: "blue",
        height: 60 + "px",
        display: "flex",
        padding: "0 30px",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h3 style={{ paddingLeft: 20 + "px" }}>Posts</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <Button
          style={{ paddingRight: 20 + "px" }}
          color="inherit"
          onClick={() => {
            console.log("on create");
            history.push("create-post");
            window.location.reload();
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
          <h3>
            {props.user.firstName} {props.user.lastName}
          </h3>
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
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </Grid>
  );
}

export default AppHeader;
