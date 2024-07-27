import { Box, Button, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Buy from "../../../assets/pictures/AddtoCart.svg";
import Wallet from "../../../assets/pictures/E-Wallet-bro.svg";
import Send from "../../../assets/pictures/MailSent.svg";
import Receive from "../../../assets/pictures/MoneyIncome.svg";
import History from "../../../assets/pictures/history.svg";
import {
  QAButtonStyle,
  QAGridContainerStyle,
  QAHeaderStyle,
} from "./MainStyle";

const QuickAccess = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Text sx={QAHeaderStyle}>Quick Access:</Text>

      <SimpleGrid columns={{ md: 2, base: 1 }} gap="32px">
        <Box sx={QAGridContainerStyle}>
          <Center>
            <Image src={Buy} alt="Buy" height="100px" width="100px" />
          </Center>

          <Button
            sx={QAButtonStyle}
            colorScheme="purple"
            onClick={() => navigate("/dashboard/buy")}
          >
            Buy
          </Button>
        </Box>

        <Box sx={QAGridContainerStyle}>
          <Center>
            <Image src={Receive} alt="Receive" height="100px" width="100px" />
          </Center>

          <Button
            colorScheme="purple"
            sx={QAButtonStyle}
            onClick={() => navigate("/dashboard/receive")}
          >
            Receive
          </Button>
        </Box>

        <Box sx={QAGridContainerStyle}>
          <Center>
            <Image src={Send} alt="Send" height="100px" width="100px" />
          </Center>

          <Button
            colorScheme="purple"
            sx={QAButtonStyle}
            onClick={() => navigate("/dashboard/send")}
          >
            Send
          </Button>
        </Box>

        <Box sx={QAGridContainerStyle}>
          <Center>
            <Image src={History} alt="History" height="100px" width="100px" />
          </Center>

          <Button
            colorScheme="purple"
            sx={QAButtonStyle}
            onClick={() => navigate("/dashboard/history")}
          >
            History
          </Button>
        </Box>
      </SimpleGrid>

      <Center mt="16px">
        <Image
          src={Wallet}
          alt="Wallet"
          objectFit="contain"
          maxHeight="340px"
        />
      </Center>
    </Box>
  );
};

export default QuickAccess;
