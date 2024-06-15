import { Star } from "@mui/icons-material";
import { Box } from "@mui/material";

export const Rating = () => {
  return (
    <Box display="flex">
      <Star sx={{ fill: "#ffcd3c" }} fontSize="small" />
      <Star sx={{ fill: "#ffcd3c" }} fontSize="small" />
      <Star sx={{ fill: "#ffcd3c" }} fontSize="small" />
      <Star sx={{ fill: "#ffcd3c" }} fontSize="small" />
      <Star sx={{ fill: "#ffcd3c" }} fontSize="small" />
    </Box>
  );
};
