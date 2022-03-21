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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Link from "next/link";

const Music_Theory = () => {
  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 200 }}>
        <Container>
          <Typography color="white.main" variant="h3">
            Music Theory
          </Typography>
          <Typography color="white.main">
            This learning path covers the core technical skills that will allow
            you to succeed in the realm of music theory. Upon completing this
            path, you will have the practical skills necessary to understand the
            base of music composition.
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box my={5}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/placeholder.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Introduction to Music Theory"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Understand music theory
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </AccordionSummary>
            <Link href="/room/music_theory1">
              <AccordionDetails>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 1360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Checkbox" src="/placeholder.png" />
                    </ListItemAvatar>
                    <ListItemAvatar>
                      <Avatar alt="Image" src="/placeholder.png" />
                    </ListItemAvatar>
                    <ListItemAvatar>
                      <Avatar alt="Pie Chart Complete" src="/placeholder.png" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Introduction to Music Theory"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Understand music theory
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Link>
          </Accordion>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Music_Theory;
