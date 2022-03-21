import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PianoIcon from "@mui/icons-material/Piano";
import Link from "next/link";
import { Container } from "@mui/material";

const NavBar = () => {
  const [page, setPage] = useState("");
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ height: 95, boxShadow: "0 2px 5px 0 rgb(0 0 0 / 20%)" }}>
        <Container>
          <Stack spacing={4} direction="row">
            <Stack>
              <Link href="/">
                <IconButton onClick={() => setPage("dashboard")}>
                  {page == "dashboard" ? (
                    <DashboardIcon fontSize="large" color="hackerGreen" />
                  ) : (
                    <DashboardIcon fontSize="large" color="button" />
                  )}
                </IconButton>
              </Link>
              <Typography fontSize={19} align="center">
                Dashboard
              </Typography>
            </Stack>
            <Stack>
              <Link href="/learn">
                <IconButton onClick={() => setPage("learn")}>
                  {page == "learn" ? (
                    <SchoolIcon fontSize="large" color="hackerGreen" />
                  ) : (
                    <SchoolIcon fontSize="large" color="button" />
                  )}
                </IconButton>
              </Link>
              <Typography fontSize={19} align="center">
                Learn
              </Typography>
            </Stack>
            <Stack>
              <Link href="/compete">
                <IconButton onClick={() => setPage("compete")}>
                  {page == "compete" ? (
                    <EmojiEventsIcon fontSize="large" color="hackerGreen" />
                  ) : (
                    <EmojiEventsIcon fontSize="large" color="button" />
                  )}
                </IconButton>
              </Link>
              <Typography fontSize={19} align="center">
                Compete
              </Typography>
            </Stack>
            <Stack>
              <Link href="/other">
                <IconButton onClick={() => setPage("other")}>
                  {page == "other" ? (
                    <MoreVertIcon fontSize="large" color="hackerGreen" />
                  ) : (
                    <MoreVertIcon fontSize="large" color="button" />
                  )}
                </IconButton>
              </Link>
              <Typography fontSize={19} align="center">
                Other
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="flex-end"
              style={{ flex: 1 }}
            >
              <Stack direction="row" alignItems="center">
                <Typography fontSize={30}>0</Typography>
                <IconButton>
                  <LocalFireDepartmentIcon
                    fontSize="large"
                    color="hackerGreen"
                  />
                </IconButton>
              </Stack>
              <IconButton>
                <AccountCircle fontSize="large" color="button" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
