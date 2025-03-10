import { Box, Fade, Grid, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import ServiceItem from "./card";

import diet_service from "../../assets/diet_service.webp";
//import fighting_service from "../../assets/fighting_service.webp";
import gym_service from "../../assets/gym_service.webp";
import meditation_service from "../../assets/meditation_service.webp";
import { isMobileScreen } from "../../constants";

const Services: FC = () => {
  const theme = useTheme();

  const ref = useRef();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTrigger(true);
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <Box ref={ref}>
      <Grid
        id="services"
        container
        bgcolor={"grey.100"}
        width="100%"
        pt={5}
        pb={10}
      >
        <Grid
          item
          xs={12}
          py={5}
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Fade in={trigger} timeout={1000}>
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
              Our&nbsp;
              <Box sx={{ color: theme.palette.secondary.main }}>Services</Box>
            </Typography>
          </Fade>
          <Grid container>
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Fade in={trigger} timeout={1400}>
                <Typography
                  color="primary"
                  variant="caption"
                  textAlign={"center"}
                  alignItems={"center"}
                  display="flex"
                  justifyContent={"center"}
                >
                  We provide everything you will need to take your body, mind &
                  health to the next level.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={1} md={3}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Grid container rowGap={isMobileScreen() ? 10 : 1}>
            <Slide direction="right" in={trigger} timeout={1000}>
              <Grid item sm={12} md={6}>
                <ServiceItem
                  src={gym_service}
                  title="Personalized Workouts"
                  content="This service is available for you at the moment."
                />
              </Grid>
            </Slide>
            <Slide direction="right" in={trigger} timeout={1200}>
              <Grid item sm={12} md={6}>
                <ServiceItem
                  src={meditation_service}
                  title="Meditation & Spiritual Health"
                  content="This service is available for you at the moment."
                />
              </Grid>
            </Slide>
            <Slide direction="right" in={trigger} timeout={1400}>
              <Grid item sm={12} md={6}>
                <ServiceItem
                  src={diet_service}
                  title="Nutritional Support"
                  content="This service is available for you at the moment."
                />
              </Grid>
            </Slide>
            {/* <Slide direction="right" in={trigger} timeout={1600}>
              <Grid item sm={12} md={6}>
                <ServiceItem
                  src={fighting_service}
                  title="Fighting Lessons"
                  content="This service is available for you at the moment."
                />
              </Grid>
            </Slide> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
