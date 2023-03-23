import React from "react";
import { Toolbar, AppBar, Avatar, Link, Typography } from "@mui/material";
import img from '../MUI-components/photo.jpg'
const Appbar = ({ drawerWidth }) => {
  return (
    <AppBar
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      position="static"
    >
      <Toolbar>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
       mohammadjalizi
        </Typography>

        <Avatar alt="Remy Sharp" src={img} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;