import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
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
                  onClick={scrollElementByIdIntoView("pricing")}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="mailto:tomas.frasheri@gmail.com?subject=I%20want%20to%20join%20the%20group!&body=Before%20sending%20the%20email%20please%20answer%20this%20questions%3A%0D%0A%0D%0AWhat%20is%20your%20name%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20nationality%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20phone%20number%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20age%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20weight%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20your%20height%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20is%20the%20health%20situation%20that%20you%20are%20currently%20in%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AWhat%20types%20of%20goals%20do%20you%20want%20to%20achieve%20by%20pursuing%20this%20coaching%20program%3F%0D%0A%0D%0AR%3A%0D%0A%0D%0AThank%20you%20for%20reaching%20us%2C%20after%20sending%20this%20email%20a%20team%20member%20will%20contact%20you!"
                  >
                    Join US
                  </a>
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
