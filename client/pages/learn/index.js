import * as React from "react";
import { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import AdjustIcon from "@mui/icons-material/Adjust";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../../components/navbar";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Learn_Card from "../../components/learn_card";
import Container from "@mui/material/Container";
import Link from "next/link";

const Learn = () => {
  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 300 }}></Box>
      <AppBar position="static" color="white">
        <Toolbar sx={{ height: 75, boxShadow: "0 2px 5px 0 rgb(0 0 0 / 20%)" }}>
          <Container>
            <Stack spacing={6} direction="row">
              <Button size="large" variant="contained" startIcon={<BookIcon />}>
                Learn
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<AdjustIcon />}
              >
                Practice
              </Button>
              <Button
                size="large"
                variant="contained"
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Container>
        <Box my={5}>
          <Typography variant="h3">Learning Paths</Typography>
          <Typography>
            Work your way through a structured learning path
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Link href="/learn/music_theory">
              <Grid item xs={4}>
                <Learn_Card />
              </Grid>
            </Link>
            <Link href="/learn/music_theory">
              <Grid item xs={4}>
                <Learn_Card />
              </Grid>
            </Link>
            <Link href="/learn/music_theory">
              <Grid item xs={4}>
                <Learn_Card />
              </Grid>
            </Link>
            <Link href="/learn/music_theory">
              <Grid item xs={4}>
                <Learn_Card />
              </Grid>
            </Link>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Learn;
