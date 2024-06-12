import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
  author: string;
};

const Quote: FC<Props> = ({ text, author }) => {
  return (
    <Box
      p={5}
      display="flex"
      flexDirection={"column"}
      color="primary.contrastText"
      width={"100%"}
      justifyContent={"center"}
    >
      <Typography variant="button" textAlign={"center"} width={"100%"}>
        "{text}"
      </Typography>
      <Typography mt={2} variant="caption" textAlign={"center"} width={"100%"}>
        {author}
      </Typography>
    </Box>
  );
};

export default Quote;
