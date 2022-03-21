import * as React from "react";
import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/ubuntu";
import { makeStyles } from "@mui/styles";
import { ListItemText } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import NavBar from "../components/navbar";

const Compete = () => {
  return (
    <Fragment>
      <NavBar />
      <Box
        sx={{
          backgroundColor: "darkBlue.main",
          height: 200,
        }}
      >
        <Stack alignItems="center">
          <Typography color="white" variant="h2">
            Leaderboards
          </Typography>
          <Typography variant="h6" color="white">
            You are rank <span color="hackerGreen.main">#10835</span>
          </Typography>
        </Stack>
      </Box>
      <Box sx={{ height: 150 }} alignItems="center">
        <Stack>
          <Button color="primary" size="large">
            All Time
          </Button>
          <Button color="primary" size="large">
            Monthly
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default Compete;
