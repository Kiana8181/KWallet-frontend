import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import coinBlack from "../../../assets/pictures/coin-black.png";
import coinWhite from "../../../assets/pictures/coin-white.png";
import wave from "../../common/purpleWave.svg";
import {
  BalanceGridStyle,
  BalanceHeaderStyle,
  BalanceValueStyle,
} from "./MainStyle";
import useUserStore from "../../../../store";

const Balance = () => {
  const staticValue = 2.36;

  const { colorMode } = useColorMode();

  const balance = useUserStore((s) => s.userBalance);

  return (
    <Box>
      <Image src={wave} borderRadius="24px" />
      <Flex flexDirection="column">
        <Text sx={BalanceHeaderStyle}>Your Current Balance:</Text>
        <Text
          sx={BalanceValueStyle}
          color={colorMode === "dark" ? "purple.100" : "purple.700"}
        >
          {balance?.value} KC
        </Text>
      </Flex>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="60px 3fr 1fr"
        sx={BalanceGridStyle}
      >
        <GridItem rowSpan={2}>
          <Image
            src={colorMode === "dark" ? coinWhite : coinBlack}
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </GridItem>
        <GridItem my="auto">
          <Text fontWeight="bold">
            KC{" "}
            <Badge colorScheme="purple" borderRadius="24px" p="8px">
              ERC20
            </Badge>
          </Text>
        </GridItem>
        <GridItem my="auto" justifySelf="end">
          <Text fontWeight="bold">{balance?.value}</Text>
        </GridItem>
        <GridItem my="auto">
          <Flex gap="4px">
            <Text>${staticValue}</Text>
            <Text color="green">+0.01%</Text>
          </Flex>
        </GridItem>
        <GridItem my="auto" justifySelf="end">
          <Text>
            {(parseFloat(balance?.value || "0") * staticValue).toFixed(2)}$
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Balance;
