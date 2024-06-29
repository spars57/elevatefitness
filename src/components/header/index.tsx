import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import scrollElementByIdIntoView from "../../utils/scroll-into-view";
import Link from "../link";
import Logo from "../logo";

const Header: FC = () => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 997 ? setTrigger(true) : setTrigger(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar id="home" style={{ opacity: trigger ? 1 : 0.8 }}>
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
              <Box mx={3} sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  onClick={scrollElementByIdIntoView("video")}
                  variant="button"
                  color="primary.contrastText"
                >
                  Home
                </Link>
              </Box>
              <Box mx={2} sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  onClick={scrollElementByIdIntoView("services")}
                  variant="button"
                  color="primary.contrastText"
                >
                  About
                </Link>
              </Box>
              <Box mx={2} sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  onClick={scrollElementByIdIntoView("contacts")}
                  variant="button"
                  color="primary.contrastText"
                >
                  Contact
                </Link>
              </Box>
              <Box mx={2} sx={{ display: { xs: "none", md: "flex" } }}>
                <Link
                  onClick={scrollElementByIdIntoView("pricing")}
                  variant="button"
                  color="primary.contrastText"
                >
                  Pricing
                </Link>
              </Box>
              <Box mx={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    scrollElementByIdIntoView("pricing")();
                    openURLInNewTab("https://www.google.com");
                  }}
                >
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
