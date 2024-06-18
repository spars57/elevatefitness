import { Fade, Grid, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobileScreen } from "../../constants";
import { questionsMapper } from "./mapper";
import FrequentlyAskedQuestion from "./question";

const FrequentlyAskedQuestions = () => {
  const [trigger, setTrigger] = useState(false);
  const [triggerItems1, setTriggerItems1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = isMobileScreen();
      const minScrollY = isMobile ? 4857 : 3000;
      window.scrollY > minScrollY && setTrigger(true);
      window.scrollY > minScrollY + 200 && setTriggerItems1(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Grid py={5} id="faqs" container bgcolor="primary.contrastText">
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <Fade in={trigger} timeout={1000}>
              <Typography
                color="primary"
                variant="button"
                textAlign={"center"}
                alignItems={"center"}
                display="flex"
                justifyContent={"center"}
                fontWeight={300}
                sx={{
                  typography: {
                    xs: { fontSize: 24 },
                    md: { fontSize: 30 },
                  },
                }}
              >
                Frequently Asked Questions
              </Typography>
            </Fade>
          </Grid>
          <Grid item display="flex" width="100%" pb={5}>
            <Fade in={trigger} timeout={1000}>
              <Typography
                width={"100%"}
                color="primary"
                variant="caption"
                textAlign={"center"}
                alignItems={"center"}
                display="flex"
                justifyContent={"center"}
              >
                Most frequently asked questions from our previous clients.
              </Typography>
            </Fade>
          </Grid>
          {questionsMapper.map(({ question, response, timeout }) => (
            <Slide in={triggerItems1} direction="right" timeout={timeout}>
              <Grid item xs={12}>
                <FrequentlyAskedQuestion
                  question={question}
                  response={response}
                />
              </Grid>
            </Slide>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1} md={3}></Grid>
    </Grid>
  );
};

export default FrequentlyAskedQuestions;
