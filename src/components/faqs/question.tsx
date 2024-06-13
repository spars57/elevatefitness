import {
  Box,
  BoxProps,
  Collapse,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {
  question: string;
  response: ReactNode;
  timeout?: number;
} & BoxProps;

const FrequentlyAskedQuestion: FC<Props> = ({
  question,
  response,
  timeout = 0,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <Box
      onClick={open ? onClose : onOpen}
      p={1}
      alignItems={"center"}
      display="flex"
      flexDirection="column"
      width="100%"
      style={{ cursor: "pointer" }}
      {...props}
    >
      <Slide direction="left" in={true} timeout={timeout}>
        <Box
          p={1}
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          width="100%"
        >
          <Typography variant="h6">{question}</Typography>
          <IconButton onClick={open ? onClose : onOpen}>
            {open ? (
              <RemoveIcon fontSize="small" />
            ) : (
              <AddIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
      </Slide>
      <Collapse in={open}>
        <Box p={1}>
          <Typography variant="body2">{response}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FrequentlyAskedQuestion;
