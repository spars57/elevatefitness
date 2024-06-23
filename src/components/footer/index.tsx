import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import Logo from "../logo";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import Link from "../link";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box>
      {/*For phone*/}
      <Box
        bgcolor={theme.palette.primary.main}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
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
            <IconButton
              onClick={() =>
                openURLInNewTab("https://instagram.com/elevatefitnes_")
              }
              color="primary"
            >
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
                style={{ textDecoration: "none", cursor: "pointer" }}
                color="secondary"
                onClick={() => openURLInNewTab("https://bytestudios.dev")}
              >
                Byte&nbsp;Studios
              </Link>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor={theme.palette.primary.main}
        sx={{ display: { xs: "none", md: "flex" } }}
        width="100%"
        justifyContent="center"
      >
        <Grid container maxWidth={"md"} p={1}>
          <Grid
            item
            width="100%"
            display="flex"
            justifyContent={"center"}
            xs={6}
            pt={3}
          >
            <Logo onClick={scrollElementByIdIntoView("video")} fontSize={11} />
          </Grid>
          <Grid
            item
            width="100%"
            display="flex"
            justifyContent={"center"}
            xs={6}
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
            pt={3}
          >
            <IconButton
              onClick={() =>
                openURLInNewTab("https://instagram.com/elevatefitnes_")
              }
              color="primary"
            >
              <InstagramIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() =>
                openURLInNewTab("https://instagram.com/bytestudios.sda")
              }
            >
              <YouTubeIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() =>
                openURLInNewTab("https://instagram.com/bytestudios.sda")
              }
            >
              <XIcon style={{ filter: "invert(1)" }} />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() =>
                openURLInNewTab("https://instagram.com/bytestudios.sda")
              }
            >
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
              2024 Copyright © Elevate Fitness | Created & Distributed by{" "}
              <Link
                style={{ textDecoration: "none", cursor: "pointer" }}
                color="secondary"
                onClick={() => openURLInNewTab("https://bytestudios.dev")}
              >
                Byte&nbsp;Studios
              </Link>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
