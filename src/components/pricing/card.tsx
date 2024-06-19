import { Box, Button, ButtonProps, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { FC, ReactNode } from "react";
import { isMobileScreen } from "../../constants";

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
    boxShadow: `0 0 10px ${theme.palette.secondary.main}`, // Added box-shadow for hover state
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  transition: "background-color 0.5s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
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
  return (
    <StyledBox
      display="flex"
      flexDirection={"column"}
      height={isMobileScreen() ? "auto" : 840}
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 1,
      }}
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
        height={isMobileScreen() ? "auto" : 400}
      >
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Box display="flex" justifyContent={"center"} p={1}>
        <Typography variant="button">What is Included</Typography>
      </Box>
      <Box p={3}>{benefits}</Box>
      <Box p={1} display="flex" flexGrow={1} alignItems={"flex-end"}>
        <StyledButton
          onClick={onGetStarted}
          variant="contained"
          color={buttonColor}
          fullWidth
          style={{ padding: 15, fontWeight: "bold" }}
        >
          Get Started!
        </StyledButton>
      </Box>
    </StyledBox>
  );
};

export default PricingCard;
