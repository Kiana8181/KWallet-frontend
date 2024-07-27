import { Box } from "@chakra-ui/react";
import NavBar from "../components/common/NavBar";
import Faq from "../components/home/Faq";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import HWorks from "../components/home/HWorks";
import Intro from "../components/home/Intro";
// import "../components/home/home.css";

const Home = () => {
  return (
    <Box pb="16px" pt="88px">
      <NavBar />

      <Intro />

      <Features />

      <HWorks />

      <Faq />

      <Footer />
    </Box>
  );
};

export default Home;
