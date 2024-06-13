import { Box, Button, Fade, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

import source from "../../assets/panoramicgym50.png";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";

const Quote: FC = () => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const handleScroll = () => window.scrollY > 1130 && setTrigger(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Slide in={trigger} direction="up" timeout={1000}>
        <Typography
          style={{ display: trigger ? "flex" : "none" }}
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
      <Fade in={trigger} timeout={2000}>
        <Typography textAlign={"center"} width={"100%"}>
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula
        </Typography>
      </Fade>
      <Fade in={trigger} timeout={2000}>
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
