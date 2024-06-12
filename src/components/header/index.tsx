import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import Logo from "../logo";
import { StyledLink } from "./styles";

const Header: FC = () => {
  const theme = useTheme();
  return (
    <AppBar id="home" style={{ opacity: 0.8 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            width={"100%"}
            justifyContent="space-between"
            bgcolor={theme.palette.primary.main}
            height={80}
          >
            <Logo onClick={scrollElementByIdIntoView("home")} />
            <Box display="flex" alignItems={"center"}>
              <Box mx={3}>
                <StyledLink variant="button" color="primary.contrastText">
                  Home
                </StyledLink>
              </Box>
              <Box mx={2}>
                <StyledLink
                  onClick={scrollElementByIdIntoView("services")}
                  variant="button"
                  color="primary.contrastText"
                >
                  About
                </StyledLink>
              </Box>
              <Box mx={2}>
                <StyledLink variant="button" color="primary.contrastText">
                  Contact
                </StyledLink>
              </Box>
              <Box mx={2}>
                <StyledLink variant="button" color="primary.contrastText">
                  Schedules
                </StyledLink>
              </Box>
              <Box mx={2}>
                <Button color="secondary" variant="contained">
                  Join US
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;