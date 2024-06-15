import { Box, Card, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Rating } from "./rating";

type Props = {
  name: string;
  feedback: string;
};

const ReviewCard: FC<Props> = ({ name, feedback }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Box p={1} height={isMobile ? "auto" : 390}>
        <Box pt={2} px={2}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {name}
          </Typography>
        </Box>
        <Box pl={1.5}>
          <Rating />
        </Box>
        <Box px={2} pt={2} pb={3}>
          <Typography variant="body1" lineHeight={1.6}>
            {feedback}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ReviewCard;
