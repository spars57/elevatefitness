import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";

type Props = {
  img?: string;
  name: string;
  description: ReactNode;
  category: string;
};

export const AboutUsCard: FC<Props> = ({
  name,
  description,
  img = "",
  category,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{ borderRadius: 1, border: `1px solid ${theme.palette.grey[100]}` }}
    >
      <Box p={1} display="flex" flexDirection={"column"} height={"auto"}>
        <Box pt={2} px={2} display="flex" justifyContent={"center"}>
          <img
            src={img}
            width="100%"
            style={{
              borderRadius: 5,
              border: `1px solid ${theme.palette.grey[200]}`,
            }}
          />
        </Box>
        <Box pl={2} pt={2}>
          <Typography color="secondary" variant="subtitle2">
            {category}
          </Typography>
        </Box>
        <Box pl={2}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {name}
          </Typography>
        </Box>

        <Box px={2} pt={1} height={250} sx={{ overflowY: "scroll" }}>
          <Typography variant="body1" lineHeight={1.6}>
            {description}
          </Typography>
        </Box>
        <Box
          alignItems={"flex-end"}
          flexGrow={1}
          display="flex"
          px={1}
          pt={2}
          pb={1}
        >
          <IconButton size="small">
            <LinkedIn fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() =>
              openURLInNewTab("https://instagram.com/elevatefitnes_")
            }
          >
            <Instagram fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <Twitter fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
