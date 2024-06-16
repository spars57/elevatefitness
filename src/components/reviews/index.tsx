import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import ReviewCard from "./card";

const Reviews = () => {
  const theme = useTheme();

  return (
    <Grid
      id="reviews"
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
          sx={{
            typography: {
              xs: { fontSize: 24 },
              md: { fontSize: 30 },
            },
          }}
        >
          What our customer's say
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <ReviewCard
                name="Adam G."
                feedback="I used to be very lazy when it comes to training, I came across this platform on Instagram and decided to try it. For the first time in my life I felt joy while training, I don't know what it is but Thomas ( my personal trainer ) had something special inside him. I lost over 50kg in the first 3 months, couldn't be happier!"
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
                feedback="By far the best service I found, I tried multiple similar services and never found what I was looking for which was feeling respected and included. The team behind this is very amazing, they treat you like a person and make you feel included! Highly recommend"
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

export default Reviews;
