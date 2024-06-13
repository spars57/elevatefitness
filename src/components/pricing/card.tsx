import { Box, Button, ButtonProps, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  price: string;
  description?: string;
  benefits: ReactNode;
  buttonColor?: ButtonProps["color"];
  onGetStarted?: () => void;
};

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
    <Box
      display="flex"
      flexDirection={"column"}
      sx={{
        border: `1px solid ${theme.palette.primary.main}`,
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
      <Box display="flex" justifyContent={"center"} p={3}>
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Box display="flex" justifyContent={"center"} p={1}>
        <Typography variant="button">What is Included</Typography>
      </Box>
      <Box p={3}>{benefits}</Box>
      <Box display="flex" justifyContent={"center"}>
        <Button
          onClick={onGetStarted}
          variant="contained"
          color={buttonColor}
          fullWidth
          style={{ padding: 15 }}
        >
          Get Started!
        </Button>
      </Box>
    </Box>
  );
};

export default PricingCard;
