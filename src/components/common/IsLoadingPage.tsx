import { Box, Center, Image, Spinner, Text } from "@chakra-ui/react";
import coin from "../../assets/pictures/Coins-pana.svg";

const IsLoadingPage = () => {
  return (
    <Center height="100vh" width="100vw">
      <Box>
        <Center>
          <Image width="30wv" src={coin} alt="logo" />
        </Center>
        <Center>
          <Text mb="32px" fontSize="4xl">
            Please wait for a while
          </Text>
        </Center>
        <Center>
          <Spinner size="xl" />
        </Center>
      </Box>
    </Center>
  );
};

export default IsLoadingPage;
