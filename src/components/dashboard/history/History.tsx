import {
  Box,
  Button,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { MdGetApp, MdOutlineSend } from "react-icons/md";
import useUserStore from "../../../../store";
import { ContainerStyle, HeaderStyle } from "./HistoryStyles";

const History = () => {
  const { colorMode } = useColorMode();

  const data = useUserStore((s) => s.userHistory);

  // if (isLoading)
  //   return (
  //     <Center mt="100px">
  //       <Spinner />
  //     </Center>
  //   );

  // if (error) throw error;

  return (
    <Center height="100%" p="16px">
      <Box sx={ContainerStyle}>
        <Text sx={HeaderStyle}>Transaction History</Text>

        {data.length === 0 ? (
          <Text>There are no transactions</Text>
        ) : (
          <TableContainer>
            <Table variant="striped" colorScheme="purple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Date & Time</Th>
                  <Th>Type</Th>
                  <Th>Amount</Th>
                  <Th>Counterparty (Sender/Recipient)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((h, index) => (
                  <Tr key={index}>
                    <Td>
                      {h.type === "0" ? (
                        <FaRegCreditCard
                          size="20px"
                          color={colorMode === "dark" ? "#FAF089" : "#975A16"}
                        />
                      ) : h.type === "1" ? (
                        <MdOutlineSend
                          size="20px"
                          color={colorMode === "dark" ? "#FC8181" : "#9B2C2C"}
                        />
                      ) : (
                        <MdGetApp
                          size="20px"
                          color={colorMode === "dark" ? "#68D391" : "#22543D"}
                        />
                      )}
                    </Td>
                    <Td>{h.date}</Td>
                    <Td>
                      {h.type === "0"
                        ? "Buy"
                        : h.type === "1"
                        ? "Give"
                        : "Receive"}
                    </Td>
                    <Td
                      color={h.type === "1" ? "red" : "green"}
                      fontWeight="bold"
                      fontSize="16px"
                    >
                      {h.value}
                    </Td>
                    <Tooltip label={h.type === "1" ? h.to : h.from}>
                      <Td maxW="295px" overflow="hidden">
                        <Button variant="unstyled">
                          {h.type === "1" ? h.to : h.from}
                        </Button>
                      </Td>
                    </Tooltip>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Center>
  );
};

export default History;
