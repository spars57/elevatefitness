import { Box, Button, Fade, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

import { isMobileScreen } from "../../constants";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";

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
              xs: { fontSize: 25 },
              sm: { fontSize: 40 },
              md: { fontSize: 60 },
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
