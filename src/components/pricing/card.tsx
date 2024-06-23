import { Box, Button, ButtonProps, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  price: string;
  description?: ReactNode;
  benefits: ReactNode;
  buttonColor?: ButtonProps["color"];
  onGetStarted?: () => void;
};

const StyledBox = styled(Box)(({ theme }) => ({
  transition: "border 0.5s, box-shadow 0.5s", // Added transition for box-shadow
  "&:hover": {
    boxShadow: `0 0 15px ${theme.palette.secondary.main}`, // Added box-shadow for hover state
  },
}));

const PricingCard: FC<Props> = ({
  title,
  price,
  description = " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  benefits,
  buttonColor = "primary",
  onGetStarted = () => null,
}) => {
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleScroll = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledBox
      display="flex"
      flexDirection={"column"}
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 1,
      }}
      height={isMobile ? "auto" : 800}
    >
      <Box display="flex" justifyContent={"center"} p={1}>
        <Typography variant="button">{title}</Typography>
      </Box>
      <Box display="flex" justifyContent={"center"} p={1}>
        <Typography variant="h4" fontWeight={"bold"}>
          {price}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        p={3}
        height={isMobile ? "auto" : 350}
      >
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Box display="flex" justifyContent={"center"} p={1}>
        <Typography variant="button">What is Included</Typography>
      </Box>
      <Box p={3}>{benefits}</Box>
      <Box p={1} display="flex" flexGrow={1} alignItems={"flex-end"}>
        <Button
          onClick={onGetStarted}
          variant="contained"
          color={buttonColor}
          fullWidth
          style={{ padding: 15, fontWeight: "bold", height: 60 }}
        >
          Get Started!
        </Button>
      </Box>
    </StyledBox>
  );
};

export default PricingCard;
