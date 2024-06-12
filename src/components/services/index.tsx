import { Box, Fade, Grid, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import ServiceItem from "./card";

const Services: FC = () => {
  const theme = useTheme();

  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null, // use the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold according to your needs
      }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  return (
    <Grid
      id="services"
      container
      bgcolor={"primary.contrastText"}
      width="100%"
      pt={5}
      pb={10}
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Fade in={inView} timeout={1000}>
          <Typography
            color="primary"
            variant="button"
            textAlign={"center"}
            alignItems={"center"}
            display="flex"
            justifyContent={"center"}
            fontWeight={600}
            fontSize={30}
          >
            Our&nbsp;
            <Box sx={{ color: theme.palette.secondary.main }}>Services</Box>
          </Typography>
        </Fade>
        <Grid container>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Fade in={inView} timeout={1400}>
              <Typography
                ref={elementRef}
                color="primary"
                variant="caption"
                textAlign={"center"}
                alignItems={"center"}
                display="flex"
                justifyContent={"center"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={5} ref={elementRef}>
        <Grid container>
          <Fade in={inView} timeout={2000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Personal Training Services"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Fade>
          <Fade in={inView} timeout={2000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Meditation & Spiritual Health"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Fade>
          <Fade in={inView} timeout={2000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Nutritional Support "
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Fade>
          <Fade in={inView} timeout={2000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Fighting Lessons"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
