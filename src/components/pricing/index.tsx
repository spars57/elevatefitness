import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Box,
  Fade,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { openURLInNewTab } from "../../utils/open-url-in-new-window";
import PricingCard from "./card";

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box id="pricing" bgcolor="primary.contrastText" pt={5} px={2}>
      <Grid container spacing={2}>
        <Slide in={true} direction="up" timeout={1000}>
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

        <Fade in={true} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              title="BASIC"
              price="$11.99/m"
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
        </Fade>
        <Fade in={true} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              buttonColor="secondary"
              title="STANDARD"
              price="$16.99/m"
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
        </Fade>
        <Fade in={true} timeout={1000}>
          <Grid item sm={12} md={4}>
            <PricingCard
              title="PREMIUM"
              price="$24.99/m"
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
        </Fade>
      </Grid>
    </Box>
  );
};

export default Pricing;
