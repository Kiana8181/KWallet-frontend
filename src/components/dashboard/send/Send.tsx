import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import sendImage from "../../../assets/pictures/sent.svg";
import SendForm from "./SendForm";

const Send = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} p="32px" height="100%">
      <Box
        my="auto"
        boxShadow="0px 10px 10px 4px rgba(212, 224, 229, 0.30)"
        borderRadius="32px"
        p="32px"
      >
        <SendForm />
      </Box>

      <Image src={sendImage} alt="send" my="auto" />
    </SimpleGrid>
  );
};

export default Send;
