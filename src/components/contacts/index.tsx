import {
  Box,
  Button,
  Fade,
  Grid,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

const Contacts: FC = () => {
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
      id="contacts"
      container
      bgcolor={"primary.contrastText"}
      width="100%"
      pb={5}
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
            Still have&nbsp;
            <Box sx={{ color: theme.palette.secondary.main }}>questions</Box>?
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={2} ref={elementRef}>
        <Grid container>
          <Slide direction="up" in={inView} timeout={2000}>
            <Grid
              item
              sm={12}
              display="flex"
              width={"100%"}
              justifyContent={"center"}
            >
              <Button variant="contained">Send us an email</Button>
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;
