import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FooterHeadingStyle, FooterIconStyle } from "./HomeStyles";

const Footer = () => {
  return (
    <Box p="32px">
      <Text sx={FooterHeadingStyle}>KWallet</Text>
      <Center>
        <SimpleGrid columns={3} gap="32px">
          <Box sx={FooterIconStyle}>
            <SiGmail size={20} />
          </Box>
          <Box sx={FooterIconStyle}>
            <AiFillInstagram size={20} />
          </Box>
          <Box sx={FooterIconStyle}>
            <FaLinkedinIn size={20} />
          </Box>
        </SimpleGrid>
      </Center>
      <Text textAlign="center" mt="32px">
        Copyright© 2022 KWallet. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
