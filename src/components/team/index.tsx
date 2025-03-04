import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import ReviewCard from "./card";

const TeamMembers = () => {
  const theme = useTheme();

  return (
    <Grid
      id="team"
      pb={5}
      container
      sx={{ backgroundColor: theme.palette.grey[100] }}
    >
      <Grid item xs={12} py={4}>
        <Typography
          color="primary"
          variant="button"
          textAlign={"center"}
          alignItems={"center"}
          display="flex"
          justifyContent={"center"}
          fontWeight={300}
          fontSize={30}
        >
          Our Team Members
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ReviewCard
                name="Adam G."
                feedback="I used to be very lazy when it comes to training, I came across this platform on Instagram and decided to try it. For the first time in my life I felt joy while training, I don't know what it is but Tomas ( my personal trainer ) had something special inside him. I lost over 18kg in the first 3 months, couldn't be happier!"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReviewCard
                name="Michele J."
                feedback="I have been recommending this service to my friends since I joined, honestly I was mindblown by the quality provided. Everything changed for the best, I hope more people find this."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ReviewCard
                name="Christian E."
                feedback="The Elevate Fitness team was very amazing they treated me so well and were always there for me when I needed their help. I highly recommend you join their program."
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid pt={3} display="flex" justifyContent={"center"} item xs={12}>
        <Button
          variant="contained"
          onClick={scrollElementByIdIntoView("video")}
        >
          Discover More
        </Button>
      </Grid>
    </Grid>
  );
};

export default TeamMembers;
