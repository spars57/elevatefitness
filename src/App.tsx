import { Box } from "@mui/material";
import Header from "./components/header";
import Services from "./components/services";
import StartingVideo from "./components/video";

function App() {
  return (
    <Box>
      <Header />
      <StartingVideo />
      <Services />
    </Box>
  );
}

export default App;
