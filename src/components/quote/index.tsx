import { Box, Button, Fade, Slide, Typography, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

import scrollElementByIdIntoView from "../../utils/scroll-into-view";

type Props = {
  src: string;
  quote: 1 | 2;
};

const Quote: FC<Props> = ({ src, quote }) => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    setIsMobile(window.innerWidth < 900);
    const handleScroll = () =>
      window.scrollY > (isMobile ? 3378 : 1660) && setTrigger(true);
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
              &nbsp;
              <Box>JOURNEY</Box>
            </>
          )}
        </Typography>
      </Slide>
      <Fade in={trigger} timeout={2000}>
        <Typography textAlign={"center"} width={"100%"}>
          Get started today and get your dream body in less than 3 months.
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
