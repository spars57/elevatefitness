import { Box } from "@mui/material";
import Contacts from "./components/contacts";
import Header from "./components/header";
import Quote from "./components/quote";
import Services from "./components/services";
import StartingVideo from "./components/video";

function App() {
  return (
    <Box overflow="hidden">
      <Header />
      <StartingVideo />
      <Services />
      <Quote
        text="Success is not the destination, but the journey we embrace"
        author="Thomas Fharensi"
      />
      <Contacts />
    </Box>
  );
}

export default App;
