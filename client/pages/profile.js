import react, { Fragment, useState } from "react";
import NavBar from "../components/navbar";
import { Box, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import WarningIcon from "@mui/icons-material/Warning";

const Profile = () => {
  const [setting, setSetting] = useState("general");
  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 120 }}>
        <Container sx={{ height: 120 }}>
          <List sx={{ backgroundColor: "darkBlue.main", height: 120 }}>
            <ListItem>
              <AccountCircleIcon color="white" />
              <ListItemText
                xs={{ color: "white" }}
                primary={
                  <Typography color="white.main" variant="h5">
                    Your Profile
                  </Typography>
                }
                secondary={
                  <Typography color="white.main">
                    Manage your account
                  </Typography>
                }
              />
              <Button
                color="hackerGreen"
                justifyContent="right"
                variant="contained"
              >
                <Typography color="white.main">Public Profile</Typography>
              </Button>
            </ListItem>
          </List>
          <Stack direction="row" my={2} spacing={2}>
            <Button
              onClick={() => setSetting("general")}
              variant="contained"
              startIcon={<SettingsIcon />}
            >
              General
            </Button>
            <Button
              onClick={() => setSetting("aboutyou")}
              variant="contained"
              startIcon={<EditIcon />}
            >
              About you
            </Button>
            <Button
              onClick={() => setSetting("other")}
              variant="contained"
              startIcon={<MiscellaneousServicesIcon />}
            >
              Other
            </Button>
          </Stack>
          {setting == "general" ? (
            <Fragment>
              <Box sx={{ border: 1, borderRadius: 3, color: "button.main" }}>
                <List>
                  <ListItem>
                    <AccountCircleIcon />
                    <ListItemText
                      primary={
                        <Stack spacing={2}>
                          <Typography fontSize={18} color="black">
                            Full Name
                          </Typography>
                          <TextField variant="outlined" />
                          <Typography fontSize={18} color="black">
                            Username
                          </Typography>
                          <TextField variant="outlined" />
                          <Typography fontSize={18} color="black">
                            Full Name
                          </Typography>
                          <TextField variant="outlined" />
                          <Button
                            color="hackerGreen"
                            justifyContent="right"
                            variant="contained"
                          >
                            <Typography color="white.main">
                              Save Changes
                            </Typography>
                          </Button>
                        </Stack>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
              <Box
                mt={2}
                sx={{ border: 1, borderRadius: 3, color: "button.main" }}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Fragment>
                          <Typography variant="h5" color="black">
                            Change your password
                          </Typography>
                          <Stack spacing={1} mt={4}>
                            <Typography fontSize={18} color="black">
                              Old Password
                            </Typography>
                            <TextField variant="outlined" />
                            <Typography fontSize={18} color="black">
                              New Password
                            </Typography>
                            <TextField variant="outlined" />

                            <Button
                              color="hackerGreen"
                              justifyContent="right"
                              variant="contained"
                            >
                              <Typography color="white.main">
                                Change password
                              </Typography>
                            </Button>
                          </Stack>
                        </Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
            </Fragment>
          ) : setting == "aboutyou" ? (
            <Box
              mt={2}
              sx={{ border: 1, borderRadius: 3, color: "button.main" }}
            >
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          textAlign="center"
                          variant="h5"
                          color="black"
                          mb={3}
                        >
                          Your Experience Level
                        </Typography>
                        <Stack alignItems="center" spacing={2} direction="row">
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 1,
                              color: "button.main",
                            }}
                          >
                            <Box sx={{ height: 200, width: 200 }}>
                              <Stack>
                                <Typography color="black" textAlign="center">
                                  Complete Beginner
                                </Typography>
                                <Typography textAlign="center">
                                  You have no knowledge and are unsure where to
                                  start
                                </Typography>
                              </Stack>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 1,
                              color: "button.main",
                            }}
                          >
                            <Box sx={{ height: 200, width: 200 }}>
                              <Stack>
                                <Typography color="black" textAlign="center">
                                  Early Intermediate
                                </Typography>
                                <Typography textAlign="center">
                                  You have basic knowledge and have used a piano
                                </Typography>
                              </Stack>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 1,
                              color: "button.main",
                            }}
                          >
                            <Box sx={{ height: 200, width: 200 }}>
                              <Stack>
                                <Typography color="black" textAlign="center">
                                  Intermediate
                                </Typography>
                                <Typography textAlign="center">
                                  You have no knowledge and are unsure where to
                                  start
                                </Typography>
                              </Stack>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: 1,
                              color: "button.main",
                            }}
                          >
                            <Box sx={{ height: 200, width: 200 }}>
                              <Stack>
                                <Typography color="black" textAlign="center">
                                  Advanced
                                </Typography>
                                <Typography textAlign="center">
                                  You have no knowledge and are unsure where to
                                  start
                                </Typography>
                              </Stack>
                            </Box>
                          </Box>
                        </Stack>
                      </Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          ) : (
            <Box sx={{ border: 1, borderRadius: 3, color: "button.main" }}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      <Stack spacing={2}>
                        <List>
                          <ListItem>
                            <PersonOffIcon fontSize="large" />
                            <ListItemText
                              primary={
                                <Typography color="black" variant="h5">
                                  Delete Your Account
                                </Typography>
                              }
                            />
                          </ListItem>
                        </List>
                        <Typography color="red">
                          Warning: If you delete your account you will lose
                          definitive access to it with no way of recovery. Your
                          personal data and progress will be erased and lost.
                        </Typography>
                        <Button variant="contained">Delete My Account</Button>
                      </Stack>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

export default Profile;
