import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import PricingCard from "./card";

const Pricing = () => {
  const theme = useTheme();

  const [trigger, setTrigger] = useState(false);
  const [triggerItems1, setTriggerItems1] = useState(false);
  const [triggerItems2, setTriggerItems2] = useState(false);
  const [triggerItems3, setTriggerItems3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1458 && setTrigger(true);
      window.scrollY > 1700 && setTriggerItems1(true);
      window.scrollY > 1750 && setTriggerItems2(true);
      window.scrollY > 1800 && setTriggerItems3(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box id="pricing" bgcolor="primary.contrastText" pt={5} px={2}>
      <Grid container spacing={2}>
        <Slide in={trigger} direction="down" timeout={1000}>
          <Grid item xs={12}>
            <Typography
              color="primary"
              variant="button"
              textAlign={"center"}
              alignItems={"center"}
              display="flex"
              justifyContent={"center"}
              fontWeight={600}
              fontSize={30}
            >
              Pricing&nbsp;
              <Box sx={{ color: theme.palette.secondary.main }}>Plans</Box>
            </Typography>
            <Grid container p={1}>
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Typography
                  color="primary"
                  variant="caption"
                  textAlign={"center"}
                  alignItems={"center"}
                  display="flex"
                  justifyContent={"center"}
                >
                  Find the best plan for you.
                </Typography>
              </Grid>
              <Grid item xs={1} md={3}></Grid>
            </Grid>
          </Grid>
        </Slide>

        <Slide direction="up" in={triggerItems1} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              title="BASIC"
              price="$11.99"
              onGetStarted={() =>
                openURLInNewTab(
                  "https://www.paypal.com/paypalme/tomasathletics"
                )
              }
              benefits={
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Complete training Plan</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remote Assistance</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Other Benefits</ListItemText>
                  </ListItemButton>
                </List>
              }
            />
          </Grid>
        </Slide>
        <Slide direction="up" in={triggerItems2} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              buttonColor="secondary"
              title="STANDARD"
              price="$16.99"
              onGetStarted={() =>
                openURLInNewTab(
                  "https://www.paypal.com/paypalme/tomasathletics"
                )
              }
              benefits={
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>All Basic Benefits</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Other Benefits</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Other Benefits</ListItemText>
                  </ListItemButton>
                </List>
              }
            />
          </Grid>
        </Slide>
        <Slide direction="up" in={triggerItems3} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              title="PREMIUM"
              price="$24.99"
              onGetStarted={() =>
                openURLInNewTab(
                  "https://www.paypal.com/paypalme/tomasathletics"
                )
              }
              benefits={
                <List>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>All Standard Benefits</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Other Benefits</ListItemText>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ArrowForwardIosOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Other Benefits</ListItemText>
                  </ListItemButton>
                </List>
              }
            />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
};

export default Pricing;
