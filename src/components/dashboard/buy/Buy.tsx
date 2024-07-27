import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import buyImage from "../../../assets/pictures/buy.svg";
import BuyForm from "./BuyForm";

const Buy = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} p="32px" height="100%">
      <Image src={buyImage} alt="send" my="auto" mr="32px" />

      <Box
        my="auto"
        boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
        borderRadius="32px"
        p="32px"
      >
        <BuyForm />
      </Box>
    </SimpleGrid>
  );
};

export default Buy;
