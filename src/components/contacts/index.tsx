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
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, {});

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
            sx={{
              typography: {
                xs: { fontSize: 24 },
                md: { fontSize: 30 },
              },
            }}
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
                Send us a direct message on instagram or contact our team via
                email.
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
              <Button variant="contained">Contact our team</Button>
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;
