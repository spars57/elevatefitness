import { Grid, Typography } from "@mui/material";
import FrequentlyAskedQuestion from "./question";

const FrequentlyAskedQuestions = () => {
  return (
    <Grid py={5} id="faqs" container bgcolor="primary.contrastText">
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        <Grid container>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              variant="caption"
              textAlign={"center"}
              alignItems={"center"}
              display="flex"
              justifyContent={"center"}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Grid>
          <Grid mt={5} item xs={12}>
            <FrequentlyAskedQuestion
              question="How do memberships work?"
              response="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
            />
            <FrequentlyAskedQuestion
              question="Can I subscribe to a single service?"
              response="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
            />
            <FrequentlyAskedQuestion
              question="How do web sessions work?"
              response="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
            />
            <FrequentlyAskedQuestion
              question="Other questions..."
              response="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={3}></Grid>
    </Grid>
  );
};

export default FrequentlyAskedQuestions;
