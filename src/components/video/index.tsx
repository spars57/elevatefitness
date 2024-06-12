import { Box, Button, Fade, Typography } from "@mui/material";
import video from "../../assets/background_video.mp4";

const StartingVideo = () => {
  return (
    <Box id="video">
      <video
        autoPlay
        muted
        loop
        id="background"
        style={{ opacity: 0.9, width: "100%", backgroundColor: "black" }}
      >
        <source src={video}></source>
      </video>
      <Fade in={true} timeout={3000}>
        <Box
          display="flex"
          flexDirection={"column"}
          color="primary.contrastText"
          alignItems={"center"}
          justifyContent={"center"}
          width="100%"
          position={"absolute"}
          sx={{
            typography: {
              xs: { top: "10%" },
              sm: { top: "20%" },
              lg: { top: "40%" },
            },
          }}
        >
          <Typography
            variant="button"
            color="primary.contrastText"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              typography: {
                xs: { fontSize: 12 },
                sm: { fontSize: 14 },
                md: { fontSize: 18 },
                lg: { fontSize: 20 },
                xl: { fontSize: 22 },
              },
            }}
          >
            Become your best version
          </Typography>
          <Typography
            variant="button"
            fontWeight={"bold"}
            fontSize={64}
            color="primary.contrastText"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              typography: {
                xs: { fontSize: 22 },
                sm: { fontSize: 32 },
                md: { fontSize: 52 },
                lg: { fontSize: 62 },
                xl: { fontSize: 72 },
              },
            }}
          >
            Start your jorney today
          </Typography>
          <Button variant="contained" color="secondary">
            Become a Member
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default StartingVideo;
