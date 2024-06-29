import { Box, Button, Fade, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

import { isMobileScreen } from "../../constants";

type Props = {
  src: string;
  quote: 1 | 2;
};

const Quote: FC<Props> = ({ src, quote }) => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = isMobileScreen();
      const minScrollY = isMobile ? 1300 : 860;
      window.scrollY > minScrollY && setTrigger(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      p={5}
      py={20}
      sx={{
        backgroundImage: `url(${src})`,
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
              xs: { fontSize: 20 },
              sm: { fontSize: 30 },
              md: { fontSize: 40 },
            },
          }}
        >
          {quote == 1 && (
            <>
              <Box>START</Box>&nbsp;
              <Box sx={{ color: theme.palette.secondary.main }}>YOUR</Box>
              ,&nbsp;
              <Box>JOURNEY</Box>&nbsp;
              <Box sx={{ color: theme.palette.secondary.main }}>TODAY</Box>!
            </>
          )}
        </Typography>
      </Slide>
      <Fade in={trigger} timeout={2000}>
        <Typography textAlign={"center"} width={"100%"}>
          Start working today towards you dream body
        </Typography>
      </Fade>
      <Fade in={trigger} timeout={2000}>
        <Box mt={2} display="flex" width={"100%"} justifyContent={"center"}>
          <Button variant="contained" color="secondary">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto:tomas.frasheri@gmail.com?subject=I%20want%20to%20join%20the%20group!&body=Before%20sending%20the%20email%20please%20answer%20this%20questions%3A%0D%0A%0D%0AWhat%20is%20your%20name%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20nationality%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20phone%20number%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20age%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20weight%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20height%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20the%20health%20situation%20that%20you%20are%20currently%20in%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20types%20of%20goals%20do%20you%20want%20to%20achieve%20by%20pursuing%20this%20coaching%20program%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AThank%20you%20for%20reaching%20us%2C%20after%20sending%20this%20email%20a%20team%20member%20will%20contact%20you!"
            >
              Join US
            </a>
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default Quote;
