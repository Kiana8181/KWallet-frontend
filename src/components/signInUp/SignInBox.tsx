import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import botImage from "../../assets/pictures/Chat-bot-signin.svg";
import {
  ButtonBoxStyles,
  HeaderBoxStyles,
  SubHeaderBoxStyles,
} from "./SignStyles";

const SignInBox = () => {
  const navigate = useNavigate();

  return (
    <Center height="100%">
      <Box p="32px">
        <Text sx={HeaderBoxStyles}>Welcome Back!</Text>

        <Image mx="auto" src={botImage} alt="hello" width="40%" />

        <Text sx={SubHeaderBoxStyles}>
          To keep connected with us please log with your personal info
        </Text>

        <Center>
          <Button sx={ButtonBoxStyles} onClick={() => navigate("/sign-in")}>
            SIGN In
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default SignInBox;
