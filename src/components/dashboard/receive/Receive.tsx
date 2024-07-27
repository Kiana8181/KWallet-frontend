import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Spinner,
  Text,
} from "@chakra-ui/react";
import QRCode from "react-qr-code";
import { ContainerStyle, WalletIdStyle } from "./ReceiveStyle";
import useUserStore from "../../../../store";

const Receive = () => {
  const data = useUserStore((s) => s.userInformation);

  const copyToClipboard = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  // if (isLoading)
  //   return (
  //     <Center mt="100px">
  //       <Spinner />
  //     </Center>
  //   );

  // if (error) throw error;

  return (
    <Center height="100%">
      <Box sx={ContainerStyle}>
        <Center mt="16px">
          <Text fontSize="xl">Network: ERC20</Text>
        </Center>
        <QRCode
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "32px",
          }}
          value={data.walletId || ""}
        />
        <Center mt="32px">
          <Box width="70%" height="40px" border="1px solid" borderRadius="7px">
            <Text sx={WalletIdStyle}>{data.walletId}</Text>
          </Box>
        </Center>
        <Center my="32px">
          <Alert status="info" width="70%">
            <AlertIcon />
            Send only ERC20 to this address. Sending any other coins may result
            in permanent loss.
          </Alert>
        </Center>
        <Center my="16px">
          <Button
            width="20%"
            colorScheme="purple"
            borderRadius="24px"
            onClick={() => {
              copyToClipboard(data.walletId);
            }}
          >
            Copy
          </Button>
        </Center>
      </Box>
    </Center>
  );
};

export default Receive;
