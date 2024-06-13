import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import Logo from "../logo";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";

const Footer = () => {
  return (
    <Box>
      {/*For phone*/}
      <Box>
        <Grid container>
          <Grid
            item
            width="100%"
            display="flex"
            justifyContent={"center"}
            xs={12}
            pt={3}
          >
            <Logo onClick={scrollElementByIdIntoView("video")} fontSize={11} />
          </Grid>
          <Grid
            item
            width="100%"
            display="flex"
            justifyContent={"center"}
            xs={12}
            pt={1}
          >
            <Grid container spacing={1}>
              <Grid
                item
                xs={4}
                color="primary.contrastText"
                width="100%"
                display="flex"
                justifyContent={"center"}
              >
                <Box display="flex" flexDirection={"column"} width={"100%"}>
                  <Typography
                    py={1}
                    fontSize={12}
                    fontWeight={"bold"}
                    variant="body1"
                    textAlign="center"
                    width={"100%"}
                  >
                    ABOUT
                  </Typography>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                    onClick={scrollElementByIdIntoView("services")}
                  >
                    Services
                  </Link>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                    onClick={scrollElementByIdIntoView("pricing")}
                  >
                    Pricing
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                color="primary.contrastText"
                width="100%"
                display="flex"
                justifyContent={"center"}
              >
                <Box display="flex" flexDirection={"column"} width="100%">
                  <Typography
                    py={1}
                    fontSize={12}
                    fontWeight={"bold"}
                    variant="body1"
                    textAlign="center"
                    width={"100%"}
                  >
                    SUPPORT
                  </Typography>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    onClick={scrollElementByIdIntoView("faqs")}
                    width={"100%"}
                  >
                    FAQs
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={4}
                color="primary.contrastText"
                width="100%"
                display="flex"
                justifyContent={"center"}
              >
                <Box display="flex" flexDirection={"column"} width="100%">
                  <Typography
                    py={1}
                    fontSize={12}
                    fontWeight={"bold"}
                    variant="body1"
                    textAlign="center"
                    width={"100%"}
                  >
                    LEGAL
                  </Typography>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                  >
                    Policy
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            width="100%"
            display="flex"
            justifyContent={"center"}
            color="primary.contrastText"
            xs={12}
            p={1}
          >
            <IconButton color="primary">
              <InstagramIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton color="primary">
              <YouTubeIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton color="primary">
              <XIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton color="primary">
              <FacebookIcon style={{ filter: "invert(1)" }} />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
          >
            <Typography
              fontSize={11}
              color="primary.contrastText"
              textAlign={"center"}
              width={"100%"}
            >
              2024 Copyright © Elevate Fitness
            </Typography>
            <Typography
              fontSize={11}
              color="primary.contrastText"
              pb={1}
              textAlign={"center"}
              width={"100%"}
            >
              Created & Distributed by{" "}
              <Link
                color="secondary"
                onClick={() => openURLInNewTab("https://bytestudios.dev")}
              >
                ByteStudios
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
