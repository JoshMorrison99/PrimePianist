import * as React from "react";
import { Fragment, useState, useEffect } from "react";
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
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const Music_Theory1 = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Fragment>
      <NavBar />
      <Box sx={{ backgroundColor: "darkBlue.main", height: 275 }}></Box>
      <Container sx={{ width: "100%" }}>
        <Box my={2}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </Container>
      <Container>
        <Box my={5}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Task 1</Typography>
              <Image src="/placeholder.png" width={25} height={25} />
              <Typography>What is Music Theory?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Description</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Fragment>
  );
};

export default Music_Theory1;
