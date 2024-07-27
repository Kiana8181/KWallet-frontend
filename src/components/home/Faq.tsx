import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import faq from "../../assets/pictures/FAQs.svg";
import { CardStyle, FaqContainerStyle, HeadingStyle } from "./HomeStyles";

const Faq = () => {
  const { colorMode } = useColorMode();

  const faqs = [
    {
      title: "Is My Wallet Secure?",
      context:
        "Yes, we prioritize the security of your wallet. KWallet employs multi-layer security measures, including end-to-end encryption and optional two-factor authentication, to ensure the safety of your assets.",
    },
    {
      title: "Can I Buy KC Tokens within the App?",
      context:
        "Absolutely! KWallet allows you to purchase KC tokens directly within the app using various payment methods. You can easily fund your wallet and start engaging in transactions.",
    },
    {
      title: "When Can I Pay Utility Bills with KC Tokens?",
      context:
        "We are excited to announce that soon, users will be able to use their KC tokens to pay utility bills directly from the app. Stay tuned for updates on this upcoming feature!",
    },
    {
      title: "What Rewards Can I Expect from Holding KC Tokens?",
      context:
        "By holding KC tokens, you will soon be able to unlock exclusive rewards and privileges through our upcoming Rewards Program. Details on the program will be provided as it launches.",
    },
    {
      title: "Is KWallet Available on Multiple Devices?",
      context:
        "Yes, KWallet is designed for seamless cross-platform integration. Whether you prefer desktop, mobile, or tablet, you can access your wallet consistently across various devices.",
    },
  ];
  return (
    <Box p="32px" bg={colorMode === "dark" ? "purple.900" : "purple.200"}>
      <Text sx={HeadingStyle} mb="16px">
        Frequently Asked Questions (FAQs)
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="16px">
        <Flex sx={FaqContainerStyle}>
          {faqs.map((f, index) => (
            <Card colorScheme="purple" key={index} sx={CardStyle}>
              <CardHeader>
                <Heading size="md">{f.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{f.context}</Text>
              </CardBody>
            </Card>
          ))}
        </Flex>

        <Center>
          <Image src={faq} alt="faq" />
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Faq;
