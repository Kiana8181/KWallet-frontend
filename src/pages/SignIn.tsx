import { Box, Center, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import { IoHomeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import wave from "../components/common/purpleWave.svg";
import SignInForm from "../components/signInUp/SignInForm";
import {
  GridStyles,
  HeaderStyles,
  HomeButtonStyles,
} from "../components/signInUp/SignStyles";
import SignUpBox from "../components/signInUp/SignUpBox";
import "../components/signInUp/sign.css";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} sx={GridStyles}>
        <Box bg="purple.50" className="slide-left">
          <Show below="md">
            <Image src={wave} />
          </Show>

          <Show above="md">
            <Box height="132px" />
          </Show>

          <Text mt="100px" sx={HeaderStyles}>
            Sign In
          </Text>

          <SignInForm />

          <Show below="md">
            <Center mt="16px">
              <Text color="#555555">
                Not registered?{" "}
                <Link
                  style={{ textDecoration: "underline", color: "#8e54e9" }}
                  to="/sign-up"
                >
                  Create an account
                </Link>
              </Text>
            </Center>
          </Show>
        </Box>

        <Show above="md">
          <Box className="sign-un-box slide-right">
            <SignUpBox />
          </Box>
        </Show>
      </SimpleGrid>

      <Box
        left="16px"
        sx={HomeButtonStyles}
        onClick={() => navigate("/KWallet-frontend/home")}
      >
        <IoHomeSharp color="#555555" size="44px" />
      </Box>
    </>
  );
};

export default SignIn;
