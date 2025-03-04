import { Box, Button, Fade, Typography } from "@mui/material";
import video from "../../assets/background_video.mp4";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";

const StartingVideo = () => {
  return (
    <Box id="video" display="flex" justifyContent={"center"} height={1080}>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="background"
        style={{
          opacity: 0.9,
          height: 1080,
        }}
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
              xs: { top: "57%" },
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
            Become the best version of yourself
          </Typography>
          <Typography
            variant="button"
            fontWeight={"bold"}
            fontSize={64}
            color="primary.contrastText"
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            sx={{
              typography: {
                xs: { fontSize: 22 },
                sm: { fontSize: 32 },
                md: { fontSize: 52 },
                lg: { fontSize: 62 },
              },
            }}
          >
            Embrace the journey to your dream physique
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={scrollElementByIdIntoView("pricing")}
          >
            Become a Member
          </Button>
        </Box>
      </Fade>
    </Box>
  );
};

export default StartingVideo;
