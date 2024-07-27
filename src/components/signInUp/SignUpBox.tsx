import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import botImage from "../../assets/pictures/Chat-bot-signup.svg";
import {
  ButtonBoxStyles,
  HeaderBoxStyles,
  SubHeaderBoxStyles,
} from "./SignStyles";

const SignUpBox = () => {
  const navigate = useNavigate();

  return (
    <Center height="100%">
      <Box p="32px">
        <Text sx={HeaderBoxStyles}>Hello, Friend!</Text>

        <Image mx="auto" src={botImage} alt="hello" width="40%" />

        <Text sx={SubHeaderBoxStyles}>
          Enter your personal details and start journey with us
        </Text>

        <Center>
          <Button
            sx={ButtonBoxStyles}
            onClick={() => navigate("/KWallet-frontend/sign-up")}
          >
            SIGN UP
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default SignUpBox;
