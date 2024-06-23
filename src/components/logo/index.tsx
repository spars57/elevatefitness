import { Typography, TypographyProps, useTheme } from "@mui/material";
import { FC } from "react";
import logo from "../../assets/1000020476.png";

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
            fontSize: 20,
          },
          md: {
            fontSize: 30,
          },
        },
      }}
      {...props}
    >
      <img width={77} src={logo}></img>
    </Typography>
  );
};

export default Logo;
