import { Box, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import dumbell from "../../assets/dumbell.svg";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import { StyledLink } from "../header/styles";

type Props = {
  title: string;
  content: ReactNode;
};

console.log(dumbell);

const ServiceItem: FC<Props> = ({ title, content }) => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent={"center"} m={3} height={110}>
      <Box
        display="flex"
        alignItems="center"
        bgcolor={theme.palette.primary.main}
        width={110}
        borderRadius={3}
      >
        <img
          src={dumbell}
          style={{ filter: "invert(1)", padding: 20, width: 110 }}
        />
      </Box>
      <Box ml={4}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
        <Box mt={0.5}>
          <StyledLink
            onClick={scrollElementByIdIntoView("video")}
            variant="button"
            color="secondary"
          >
            DISCOVER MORE
          </StyledLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceItem;
