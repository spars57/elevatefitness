import { Box, Button, Fade, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

import source from "../../assets/panoramicgym50.png";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";

const Quote: FC = () => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);
  const theme = useTheme();

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
    <Box
      p={5}
      py={20}
      sx={{
        backgroundImage: `url(${source})`,
        backgroundSize: "cover",
      }}
      display="flex"
      flexDirection={"column"}
      color="primary.contrastText"
      width={"100%"}
      justifyContent={"center"}
    >
      <Slide in={inView} direction="up" timeout={1000}>
        <Typography
          style={{ display: inView ? "flex" : "none" }}
          variant="button"
          display="flex"
          justifyContent={"center"}
          textAlign={"center"}
          width={"100%"}
          sx={{
            typography: {
              xs: { fontSize: 25 },
              sm: { fontSize: 40 },
              md: { fontSize: 60 },
            },
          }}
        >
          <Box>DON'T</Box>&nbsp;
          <Box sx={{ color: theme.palette.secondary.main }}>THINK</Box>,&nbsp;
          <Box>START</Box>&nbsp;
          <Box sx={{ color: theme.palette.secondary.main }}>TODAY</Box>!
        </Typography>
      </Slide>
      <Typography textAlign={"center"} width={"100%"} ref={elementRef}>
        Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
        ligula
      </Typography>
      <Fade in={inView} timeout={2000}>
        <Box mt={3} display="flex" width={"100%"} justifyContent={"center"}>
          <Button
            variant="contained"
            color="secondary"
            onClick={scrollElementByIdIntoView("pricing")}
          >
            Join US
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default Quote;
