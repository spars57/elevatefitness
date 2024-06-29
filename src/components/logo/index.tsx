import { TypographyProps } from "@mui/material";
import { FC } from "react";
import logo from "../../assets/logo.jpg";

interface Props extends TypographyProps {
  collapsed?: boolean;
}

const Logo: FC<Props> = () => {
  return <img src={logo} width={78}></img>;
};

export default Logo;
