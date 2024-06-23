import { TypographyProps } from "@mui/material";
import { FC } from "react";
import logo from "../../assets/1000020476.png";

interface Props extends TypographyProps {
  collapsed?: boolean;
}

const Logo: FC<Props> = ({ collapsed = false, ...props }) => {
  return <img src={logo} width={78}></img>;
};

export default Logo;
