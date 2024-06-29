import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

import Andrea from "../../assets/results/andrea-results.jpg";
import Daniel from "../../assets/results/daniel-results.jpg";

import { isMobileScreen } from "../../constants";

const ClientResults = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          py={5}
          display="flex"
          justifyContent={"space-between"}
        >
          <Grid display="flex" justifyContent={"center"} item xs={12} md={6}>
            <img src={Daniel} width="100%" />
          </Grid>
          <Grid
            display="flex"
            alignItems={"center"}
            width="100%"
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                display={isMobileScreen() ? "flex" : "block"}
                justifyContent={isMobileScreen() ? "center" : "left"}
                textAlign={isMobileScreen() ? "center" : "left"}
                variant="h4"
                color="primary.contrastText"
              >
                Daniel
              </Typography>
              <Typography
                display={isMobileScreen() ? "flex" : "block"}
                justifyContent={isMobileScreen() ? "center" : "left"}
                textAlign={isMobileScreen() ? "center" : "left"}
                mt={3}
                variant="body1"
                color="primary.contrastText"
              >
                For almost 50 days, Daniel achieved this incredible
                transformation with the help of the right diets and exercises
                that we gave him. He was 189 lbs and went to 127.8 lbs, now he
                also got perfect visible abs.
              </Typography>
            </Box>
          </Grid>
          <Grid display="flex" justifyContent={"center"} item xs={12} md={6}>
            <img src={Andrea} width="100%" />
          </Grid>
          <Grid
            display="flex"
            alignItems={"center"}
            width="100%"
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                display={isMobileScreen() ? "flex" : "block"}
                justifyContent={isMobileScreen() ? "center" : "left"}
                textAlign={isMobileScreen() ? "center" : "left"}
                variant="h4"
                color="primary.contrastText"
              >
                Andrea
              </Typography>
              <Typography
                display={isMobileScreen() ? "flex" : "block"}
                justifyContent={isMobileScreen() ? "center" : "left"}
                textAlign={isMobileScreen() ? "center" : "left"}
                mt={3}
                variant="body1"
                color="primary.contrastText"
              >
                In just 60 days, Andrea transformed his body with our help. He
                lost 30 pounds, built muscle, and achieved a defined six-pack.
                Andreas' rapid transformation highlights the effectiveness of a
                structured diet and an effective workout routine.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ClientResults;
