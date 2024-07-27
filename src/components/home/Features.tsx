import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { CardStyle, HeadingStyle } from "./HomeStyles";

const Features = () => {
  const { colorMode } = useColorMode();

  const features = [
    {
      title: " Secure and User-Friendly Wallet",
      context:
        "Experience a highly secure and user-friendly wallet interface designed to simplify cryptocurrency management for both beginners and seasoned users.",
    },
    {
      title: "Effortless Token Transactions",
      context:
        "Seamlessly buy, sell, and transfer KC tokens with just a few clicks. Our intuitive interface ensures a smooth and straightforward transaction process.",
    },
    {
      title: "Real-Time Transaction History",
      context:
        "Stay informed about your financial activities with a real-time and detailed transaction history. Easily track your purchases, transfers, and other transactions in one centralized location.",
    },
    {
      title: "Integrated Market Data",
      context:
        "Access up-to-date market information directly within the wallet. Stay informed about the latest trends, prices, and market capitalization of KC tokens.",
    },
    {
      title: "Multi-Layer Security",
      context:
        "Rest easy with our multi-layer security measures, including end-to-end encryption and optional two-factor authentication. Your assets are protected with the highest standards of security.",
    },
    {
      title: "Token Utility Beyond Trading",
      context:
        "Unlock a world of possibilities with your KC tokens. Soon, you will be able to pay utility bills and enjoy exclusive rewards and privileges directly through the wallet.",
    },
    {
      title: "User-Centric Design",
      context:
        "Our user-centric design focuses on simplicity without compromising functionality. Enjoy a visually pleasing and efficient wallet experience tailored to your needs.",
    },
    {
      title: "Seamless Cross-Platform Integration",
      context:
        "Access your wallet seamlessly across various devices. Whether you prefer desktop, mobile, or tablet, our wallet is designed for a consistent and enjoyable user experience.",
    },
  ];

  return (
    <Box p="32px" bg={colorMode === "dark" ? "purple.900" : "purple.200"}>
      <Text sx={HeadingStyle} mb="16px">
        Key Features
      </Text>
      <SimpleGrid columns={{ lg: 4, md: 2, base: 1 }} gap="32px">
        {features.map((f, index) => (
          <Card key={index} sx={CardStyle}>
            <CardHeader>
              <Heading size="md">{f.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{f.context}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;
