import { Box } from "@mui/material";
import Contacts from "./components/contacts";
import FrequentlyAskedQuestions from "./components/faqs";
import Footer from "./components/footer";
import Header from "./components/header";
import Pricing from "./components/pricing";
import Quote from "./components/quote";
import Reviews from "./components/reviews";
import Services from "./components/services";
import StartingVideo from "./components/video";

import panoramic from "./assets/panoramicgym50.png";
import ClientResults from "./components/client-results";

function App() {
  return (
    <Box overflow="hidden">
      <Header />
      <StartingVideo />
      {/* <AboutUs /> */}
      <Services />
      <Quote quote={1} src={panoramic} />
      <Pricing />
      <ClientResults />
      <Reviews />
      <FrequentlyAskedQuestions />
      <Contacts />
      <Footer />
    </Box>
  );
}

export default App;
