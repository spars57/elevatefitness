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
import { isMobileScreen } from "../../constants";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import PricingCard from "./card";

const Pricing = () => {
  const theme = useTheme();

  const [titleTrigger, setTitleTrigger] = useState(false);
  const [triggerItems1, setTriggerItems1] = useState(false);
  const [triggerItems2, setTriggerItems2] = useState(false);
  const [triggerItems3, setTriggerItems3] = useState(false);

  const [isMobile, setIsMobile] = useState(isMobileScreen());

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = isMobileScreen();
      const minScrollY = isMobile ? 1590 : 1390;
      const increment = isMobile ? 500 : 100;
      setIsMobile(isMobile);

      const generateIncrement = (i: number) => increment * i;

      window.scrollY > minScrollY && setTitleTrigger(true);
      window.scrollY > minScrollY + generateIncrement(1) &&
        setTriggerItems1(true);
      window.scrollY > minScrollY + generateIncrement(2) &&
        setTriggerItems2(true);
      window.scrollY > minScrollY + generateIncrement(3) &&
        setTriggerItems3(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="pricing" bgcolor="primary.contrastText" pt={5} pb={10} px={2}>
      <Grid container spacing={2}>
        <Slide in={titleTrigger} direction="up" timeout={1000}>
          <Grid item xs={12} py={5}>
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
                  With ElevateFitness, our highly qualified services will get
                  you there. We can provide a tailored approach that is
                  specifically designed to help you become healthier and fitter
                  than ever before! Invest in yourself today and see the results
                  of having an expert by your side every step of the way.
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
                  price="$47.00"
                  description={
                    <Box display="flex" flexDirection={"column"}>
                      <Box display="flex" justifyContent={"center"}>
                        <b>Duration: 3 weeks</b>
                      </Box>
                      <p></p>
                      Communicating 1 on 1 with your personal trainer every day
                      for 3 weeks.
                      <p></p>
                      Train with experienced fitness services to reach your
                      individual goals and maximize results through personalized
                      resistance training.
                      <p></p>
                      In this category we will provide a personalized training
                      program for you which you can do in home conditions
                      together with the diet plan attached to it, so that you
                      can be more healthier with your diet too.
                    </Box>
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
                        <ListItemText>Daily Consultation</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Custom Workout Plan</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Healthy Diet Program</ListItemText>
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
                  title="STANDARD"
                  price="$87.00"
                  description={
                    <Box display="flex" flexDirection={"column"}>
                      <Box display="flex" justifyContent={"center"}>
                        <b>Duration: 3 weeks</b>
                      </Box>
                      <p></p>
                      Communicating 1 on 1 with your personal trainer every day
                      for 4 weeks.
                      <p></p>
                      Train with experienced fitness services to reach your
                      individual goals and maximize results thorough
                      personalized resistance training.
                      <p></p>
                      In this category we will prepare a personalized training
                      program for you which you can do in home with some weights
                      that you might use to level up your body into a whole new
                      different level, together with the diet plan attached to
                      it, so that you can be more healthier with your diet too.
                    </Box>
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
                        <ListItemText>Daily Consultation</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Custom Workout Plan</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Healthy Diet Program</ListItemText>
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
                  price="$119.00"
                  description={
                    <Box display="flex" flexDirection={"column"}>
                      <Box display="flex" justifyContent={"center"}>
                        <b>Duration: 3 weeks</b>
                      </Box>
                      <p></p>
                      Communicating 1 on 1 with your personal trainer every day
                      for 5 weeks.
                      <p></p>
                      Increase your strength and endurance through our
                      customized interval training sessions.
                      <p></p>
                      In this category we will prepare a personalized training
                      program for you which you can do in the gym, so the next
                      time you go there you know exactly what exercises to do,
                      together with the diet plan attached to it, so that you
                      can be more healthier with your diet too.
                    </Box>
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
                        <ListItemText>Daily Consultation</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Custom Workout Plan</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon>
                          <ArrowForwardIosOutlined fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Healthy Diet Program</ListItemText>
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
