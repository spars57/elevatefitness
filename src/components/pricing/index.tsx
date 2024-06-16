import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import PricingCard from "./card";

const Pricing = () => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  const [triggerItems1, setTriggerItems1] = useState(false);
  const [triggerItems2, setTriggerItems2] = useState(false);
  const [triggerItems3, setTriggerItems3] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobile(window.innerWidth < 900);
      window.scrollY > (!isMobile ? 2143 : 3821) && setTrigger(true);
      window.scrollY > (!isMobile ? 2385 : 4000) && setTriggerItems1(true);
      window.scrollY > (!isMobile ? 2435 : 4450) && setTriggerItems2(true);
      window.scrollY > (!isMobile ? 2485 : 5000) && setTriggerItems3(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="pricing" bgcolor="primary.contrastText" pt={5} pb={10} px={2}>
      <Grid container spacing={2}>
        <Slide in={trigger} direction="down" timeout={1000}>
          <Grid item xs={12}>
            <Typography
              color="primary"
              variant="button"
              textAlign={"center"}
              alignItems={"center"}
              display="flex"
              justifyContent={"center"}
              fontWeight={600}
              sx={{
                typography: {
                  xs: { fontSize: 24 },
                  md: { fontSize: 30 },
                },
              }}
            >
              Pricing&nbsp;
              <Box sx={{ color: theme.palette.secondary.main }}>Plans</Box>
            </Typography>
            <Grid container p={1}>
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Typography
                  color="primary"
                  variant="caption"
                  textAlign={"center"}
                  alignItems={"center"}
                  display="flex"
                  justifyContent={"center"}
                >
                  Find the best plan for you, cancel your subscription at any
                  time.
                </Typography>
              </Grid>
              <Grid item xs={1} md={3}></Grid>
            </Grid>
          </Grid>
        </Slide>

        <Grid item sm={1} lg={2}></Grid>
        <Grid item sm={10} lg={8}>
          <Grid container spacing={2}>
            <Slide
              direction={isMobile ? "left" : "up"}
              in={triggerItems1}
              timeout={1000}
            >
              <Grid item sm={12} lg={4}>
                <PricingCard
                  title="BASIC"
                  price="$11.99"
                  onGetStarted={() =>
                    openURLInNewTab(
                      "https://www.paypal.com/paypalme/tomasathletics"
                    )
                  }
                  benefits={
                    <List>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Complete training Plan</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Remote Assistance</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Other Benefits</ListItemText>
                      </ListItemButton>
                    </List>
                  }
                />
              </Grid>
            </Slide>
            <Slide
              direction={isMobile ? "left" : "up"}
              in={triggerItems2}
              timeout={1000}
            >
              <Grid item sm={12} lg={4}>
                <PricingCard
                  buttonColor="secondary"
                  title="STANDARD"
                  price="$16.99"
                  onGetStarted={() =>
                    openURLInNewTab(
                      "https://www.paypal.com/paypalme/tomasathletics"
                    )
                  }
                  benefits={
                    <List>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>All Basic Benefits</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Other Benefits</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Other Benefits</ListItemText>
                      </ListItemButton>
                    </List>
                  }
                />
              </Grid>
            </Slide>
            <Slide
              direction={isMobile ? "left" : "up"}
              in={triggerItems3}
              timeout={1000}
            >
              <Grid item sm={12} lg={4}>
                <PricingCard
                  title="PREMIUM"
                  price="$24.99"
                  onGetStarted={() =>
                    openURLInNewTab(
                      "https://www.paypal.com/paypalme/tomasathletics"
                    )
                  }
                  benefits={
                    <List>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>All Standard Benefits</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Other Benefits</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Other Benefits</ListItemText>
                      </ListItemButton>
                    </List>
                  }
                />
              </Grid>
            </Slide>
          </Grid>
        </Grid>
        <Grid item sm={1} lg={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
