import { Box, Center, Image, Show, SimpleGrid, Text } from "@chakra-ui/react";
import { IoHomeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import wave from "../components/common/redWave.svg";
import SignInBox from "../components/signInUp/SignInBox";
import {
  GridStyles,
  HeaderStyles,
  HomeButtonStyles,
} from "../components/signInUp/SignStyles";
import SignUpForm from "../components/signInUp/SignupForm";
import "../components/signInUp/sign.css";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }} sx={GridStyles}>
        <Show above="md">
          <Box className="sign-in-box slide-left" zIndex="1">
            <SignInBox />
          </Box>
        </Show>

        <Box bg="purple.50" className="slide-right" zIndex="0">
          <Show below="md">
            <Image src={wave} />
          </Show>

          <Show above="md">
            <Box height="132px" />
          </Show>

          <Text mt="32px" sx={HeaderStyles}>
            Sign Up
          </Text>

          <SignUpForm />

          <Show below="md">
            <Center mt="16px">
              <Text color="#555555">
                Already registered?{" "}
                <Link
                  style={{ textDecoration: "underline", color: "#8a2387" }}
                  to="/sign-in"
                >
                  Login
                </Link>
              </Text>
            </Center>
          </Show>
        </Box>
      </SimpleGrid>

      <Box
        right="16px"
        sx={HomeButtonStyles}
        onClick={() => navigate("/KWallet-frontend/home")}
      >
        <IoHomeSharp color="#555555" size="44px" />
      </Box>
    </>
  );
};

export default SignUp;
