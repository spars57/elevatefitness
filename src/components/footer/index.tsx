import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "../logo";

import InstagramIcon from "@mui/icons-material/Instagram";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import Link from "../link";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);
  const theme = useTheme();
  return (
    <Box>
      <Dialog
        open={openTerms || openPolicy}
        onClose={() => {
          setOpenTerms(false);
          setOpenPolicy(false);
        }}
      >
        <DialogTitle>
          {openTerms ? "Terms & Conditions" : "Privacy Policy"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <List>
            Last updated: 3rd of March of 2025 at 9:42 PM GMT+1
            <ListItem></ListItem>
            <ListItemText>
              <b>1. Introduction</b>
              <br />
              These Terms and Conditions govern your use of our website and the
              purchase of our personal training services. By accessing and using
              this website, you fully agree to these Terms and Conditions.
            </ListItemText>
            <ListItemText>
              <b>2. General Information</b>
              <br />
              Owner: Tomas Frasheri
              <br />
              Website: https://elevatefitness.vercel.app
              <br />
              Contact: elevatingfitness0@gmail.com
            </ListItemText>
            <ListItemText>
              <b>3. Services Offered</b>
              <br />
              Elevate Fitness provides both online and in-person personal
              training services. Specific details of each service are outlined
              on the website and may be subject to change. Before starting
              purschasing any service, please fill the email form on the website
              that pops up when you click on the "JOIN US" button.
            </ListItemText>
            <ListItemText>
              <b>4. Payments and Refunds</b>
              <br />
              Payments must be made before training sessions begin. Service
              prices may be updated without prior notice. Refunds will only be
              issued in specific circumstances, such as failure to deliver the
              service as contracted.
            </ListItemText>
            <ListItemText>
              <b>5. Cancellation and Rescheduling</b>
              <br />
              Sessions can be rescheduled with at least 24 hours' notice.
              Cancellations within less than 24 hours may result in the loss of
              the session without a refund
            </ListItemText>
            <ListItemText>
              <b>6. Client Responsibilities</b>
              <br />
              Clients must provide accurate information about their health and
              physical condition before starting any training program. It is the
              client’s responsibility to follow the trainer's guidance and
              practice exercises safely.
            </ListItemText>
            <ListItemText>
              <b>7. Disclaimer</b>
              <br />
              Elevate Fitness is not responsible for any injuries, damages, or
              losses resulting from participation in training sessions.
            </ListItemText>
            <ListItemText>
              <b>8. Intellectual Property</b>
              <br />
              All content available on the Elevate Fitness website, including
              text, images, videos, and training materials, is owned by Elevate
              Fitness and may not be copied, distributed, or used without
              permission.
            </ListItemText>
            <ListItemText>
              <b>9. Privacy and Data Protection</b>
              <br />
              All client personal information will be handled in accordance with
              our Privacy Policy, available on the website.
            </ListItemText>
            <ListItemText>
              <b>10. Changes to Terms and Conditions</b>
              <br />
              Elevate Fitness reserves the right to modify these Terms and
              Conditions at any time. Changes will take effect as soon as they
              are published on the website.
            </ListItemText>
            <ListItemText>
              <b>11. Governing Law</b>
              <br />
              These Terms and Conditions are governed by the laws of the country
              where Elevate Fitness operates. In the event of disputes, both
              parties agree to submit to the jurisdiction of the appropriate
              courts.
            </ListItemText>
            <ListItemText>
              <b>12. Contact</b>
              <br />
              If you have any questions about these Terms and Conditions, please
              contact us at elevatingfitness0@gmail.com.
            </ListItemText>
          </List>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" onClick={() => setOpenTerms(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
                    onClick={() => setOpenTerms(true)}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                    onClick={() => setOpenPolicy(true)}
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
                    onClick={() => setOpenTerms(true)}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    variant="caption"
                    color="primary.contrastText"
                    textAlign="center"
                    width={"100%"}
                    onClick={() => setOpenPolicy(true)}
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
