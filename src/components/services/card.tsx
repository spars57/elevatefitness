import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  content: ReactNode;
  src: string;
};

const ServiceItem: FC<Props> = ({ title, content, src }) => {
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      m={3}
      height={110}
    >
      <Box display="flex" alignItems="center" width={110} borderRadius={3}>
        <img src={src} style={{ width: 200 }} />
      </Box>
      <Box ml={15}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </Box>
    </Box>
  );
};

export default ServiceItem;
