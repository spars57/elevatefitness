import { Box } from "@mui/material";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import Header from "./components/header";
import Pricing from "./components/pricing";
import Quote from "./components/quote";
import Services from "./components/services";
import StartingVideo from "./components/video";

function App() {
  return (
    <Box overflow="hidden">
      <Header />
      <StartingVideo />
      <Services />
      <Quote />
      <Pricing />
      <Contacts />
      <Footer />
    </Box>
  );
}

export default App;
