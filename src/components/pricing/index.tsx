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
      const isMobile = window.innerWidth < 900;
      const triggeringPoint = 1250;
      const increment = isMobile ? 242 : 100;

      setIsMobile(isMobile);

      window.scrollY > triggeringPoint && setTrigger(true);
      window.scrollY > triggeringPoint + increment && setTriggerItems1(true);
      window.scrollY > triggeringPoint + increment * 2 &&
        setTriggerItems2(true);
      window.scrollY > triggeringPoint + increment * 3 &&
        setTriggerItems3(true);
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
                  title="Basic"
                  price="$49.99"
                  description={
                    <>
                      <b>Duration: 10 days</b>
                      <p></p>
                      Communicating 1 on 1 with your personal trainer every day
                      from day 1 to day 10.
                      <p></p>
                      Increase your strength and endurance through our
                      customized interval training sessions.
                      <p></p>
                      In this category we will prepare a personalized training
                      program for you which you can do in the gym, so the next
                      time you go there you know exactly what exercises to do,
                      together with the diet plan attached to it, so that you
                      can be more healthier with your diet too.
                    </>
                  }
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
                        <ListItemText>Workout Guide</ListItemText>
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
                  buttonColor="primary"
                  title="Standard"
                  description={
                    <>
                      <b>Duration: 10 days</b>
                      <p></p>Communicating 1 on 1 with your personal trainer
                      every day from day 1 to day 10.<p></p>
                      Train with experienced fitness trainers to reach your
                      individual goals and maximize results through personalized
                      resistance training.
                      <p></p>
                      In this category we will provide a personalized training
                      program for you which you can do in home conditions
                      together with the diet plan attached to it, so that you
                      can be more healthier with your diet too.
                    </>
                  }
                  price="$89.99"
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
                  title="Premium"
                  description={
                    <>
                      <b>Duration: 10 days</b>
                      <p></p>Communicating 1 on 1 with your personal trainer
                      every day from day 1 to day 10.<p></p>
                      Train with experienced fitness trainers to reach your
                      individual goals and maximize results thorough
                      personalized resistance training. <p></p> In this category
                      we will prepare a personalized training program for you
                      which you can do in home with some weights that you might
                      use to level up your body into a whole new different
                      level, together with the diet plan attached to it, so that
                      you can be more healthier with your diet too.
                    </>
                  }
                  price="$124.99"
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
