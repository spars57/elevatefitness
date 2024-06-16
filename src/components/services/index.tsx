import { Box, Fade, Grid, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ServiceItem from "./card";

const Services: FC = () => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobile(window.innerWidth < 900);
      window.scrollY > (isMobile ? 2300 : 1050) && setTrigger(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <Grid container>
          <Slide direction="right" in={trigger} timeout={1000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Personal Training Services"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Slide>
          <Slide direction="right" in={trigger} timeout={1000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Meditation & Spiritual Health"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Slide>
          <Slide direction="right" in={trigger} timeout={1000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Nutritional Support "
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Slide>
          <Slide direction="right" in={trigger} timeout={1000}>
            <Grid item sm={6}>
              <ServiceItem
                title="Fighting Lessons"
                content="A professional of our team will guide you through your workout"
              />
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
