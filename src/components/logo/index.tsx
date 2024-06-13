import { Box, Typography, TypographyProps, useTheme } from "@mui/material";
import { FC } from "react";

interface Props extends TypographyProps {
  collapsed?: boolean;
}

const Logo: FC<Props> = ({ collapsed = false, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      display="flex"
      variant="button"
      fontWeight={300}
      letterSpacing={2}
      sx={{
        typography: {
          xs: {
            fontSize: 24,
          },
          md: {
            fontSize: 30,
          },
        },
      }}
      {...props}
    >
      <Box sx={{ color: theme.palette.primary.contrastText }}>
        {collapsed ? "E" : "ELEVATE"}
      </Box>
      &nbsp;
      <Box sx={{ color: theme.palette.secondary.main }}>
        {collapsed ? "F" : "FITNESS"}
      </Box>
    </Typography>
  );
};

export default Logo;
