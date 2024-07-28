import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import welcomeImage from "../../assets/pictures/buyMain.svg";
import {
  HeadingStyle,
  IntroDescriptionStyle,
  IntroDiveInStyle,
} from "./HomeStyles";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <Box minHeight="calc(100vh - 88px)" pb="16px">
      <Text sx={HeadingStyle}>
        Welcome to KWallet - Your Gateway to Digital Wealth!
      </Text>
      <Center>
        <Image src={welcomeImage} width="30%" />
      </Center>
      <Text sx={IntroDescriptionStyle}>
        Embark on a seamless journey into the world of digital currency with
        KWallet. Register today to unlock the power of secure transactions,
        effortless coin management, and endless financial possibilities. Your
        digital wallet adventure starts here!
      </Text>
      <Text sx={IntroDiveInStyle}>🚀 Ready to dive in?</Text>
      <Center>
        <Button
          mt="16px"
          size="lg"
          borderRadius="24px"
          colorScheme="purple"
          onClick={() => navigate("/sign-up")}
        >
          Let's Get Started
        </Button>
      </Center>
    </Box>
  );
};

export default Intro;
