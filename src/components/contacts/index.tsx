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
    <Grid id="contacts" container bgcolor={"grey.100"} width="100%" py={10}>
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
              <Button variant="contained">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="mailto:tomas.frasheri@gmail.com?subject=I%20want%20to%20join%20the%20group!&body=Before%20sending%20the%20email%20please%20answer%20this%20questions%3A%0D%0A%0D%0AWhat%20is%20your%20name%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20nationality%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20phone%20number%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20age%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20weight%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20height%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20the%20health%20situation%20that%20you%20are%20currently%20in%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20types%20of%20goals%20do%20you%20want%20to%20achieve%20by%20pursuing%20this%20coaching%20program%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AThank%20you%20for%20reaching%20us%2C%20after%20sending%20this%20email%20a%20team%20member%20will%20contact%20you!"
                >
                  Contact our team
                </a>
              </Button>
            </Grid>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contacts;
