import { Fragment } from "react";
import NavBar from "../components/navbar";
import { Box } from "@mui/system";
import { Container, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 120 }}>
        <Container>
          <Stack direction="row">
            <Stack justifyContent="center">
              <Typography color="white.main" fontFamily="Ubuntu" variant="h3">
                Dashboard
              </Typography>
              <Typography color="white.main" fontFamily="Ubuntu">
                Complete rooms and upskill in piano, all from your browser.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="right"
              spacing={4}
              style={{ flex: 1 }}
              sx={{ height: 120 }}
            >
              <Stack alignItems="center" justifyContent="center">
                <Typography color="hackerGreen.main" fontFamily="Ubuntu">
                  In the top 1%
                </Typography>
                <Typography color="white.main" fontFamily="Ubuntu" variant="h4">
                  1014144
                </Typography>
                <Stack direction="row" spacing={0.5}>
                  <GroupsIcon fontSize="large" />
                  <Typography
                    variant="h6"
                    color="button.main"
                    fontFamily="Ubuntu"
                  >
                    Users
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Typography color="hackerGreen.main" fontFamily="Ubuntu">
                  In the top 1%
                </Typography>
                <Typography color="white.main" fontFamily="Ubuntu" variant="h4">
                  1025
                </Typography>
                <Stack direction="row" spacing={0.5}>
                  <EmojiEventsIcon fontSize="large" />
                  <Typography
                    variant="h6"
                    color="button.main"
                    fontFamily="Ubuntu"
                  >
                    Rank
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Home;
