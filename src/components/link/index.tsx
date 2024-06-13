import { Link as MuiLink, styled } from "@mui/material";

const Link = styled(MuiLink)(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.5s",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export default Link;
