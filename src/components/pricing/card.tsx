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
          variant="contained"
          color={buttonColor}
          fullWidth
          style={{ padding: 15, fontWeight: "bold" }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="mailto:tomas.frasheri@gmail.com?subject=I%20want%20to%20join%20the%20group!&body=Before%20sending%20the%20email%20please%20answer%20this%20questions%3A%0D%0A%0D%0AWhat%20is%20your%20name%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20nationality%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20phone%20number%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20age%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20weight%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20height%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20the%20health%20situation%20that%20you%20are%20currently%20in%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20types%20of%20goals%20do%20you%20want%20to%20achieve%20by%20pursuing%20this%20coaching%20program%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AThank%20you%20for%20reaching%20us%2C%20after%20sending%20this%20email%20a%20team%20member%20will%20contact%20you!"
          >
            Get Started!
          </a>
        </StyledButton>
      </Box>
    </StyledBox>
  );
};

export default PricingCard;
