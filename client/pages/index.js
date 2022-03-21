import { Fragment } from "react";
import NavBar from "../components/navbar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 120 }}>
        <Stack direction="row">
          <Box sx={{ width: "50%" }} textAlign="center">
            <Stack sx={{ height: 120 }} display="inline-block" textAlign="left">
              <Typography color="white" fontFamily="Ubuntu" variant="h3">
                Dashboard
              </Typography>
              <Typography color="white" fontFamily="Ubuntu">
                Complete rooms and upskill in piano, all from your browser.
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={4}
              sx={{ height: 120 }}
            >
              <Stack alignItems="center" justifyContent="center">
                <Typography color="hackerGreen.main" fontFamily="Ubuntu">
                  In the top 1%
                </Typography>
                <Typography color="white" fontFamily="Ubuntu" variant="h4">
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
                <Typography color="white" fontFamily="Ubuntu" variant="h4">
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
          </Box>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default Home;
