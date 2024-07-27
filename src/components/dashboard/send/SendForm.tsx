import {
  Box,
  Button,
  Center,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import useUserStore from "../../../../store";
import { History } from "../../../entities/History";
import ErrorNotify from "../../common/ErrorNotify";
import { InputStyle, TextErrorStyle } from "../../common/FormStyle";
import SuccessModal from "../../common/SuccessModal";
import { SendCoin } from "../../common/api-call";

const schema = z.object({
  receiver: z.string().min(1),

  value: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const SendForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = useUserStore((s) => s.userInformation);

  const balance = useUserStore((s) => s.userBalance);

  const history = useUserStore((s) => s.userHistory);

  const setBalance = useUserStore((s) => s.setUserBalance);

  const setHistory = useUserStore((s) => s.setUserHistory);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const [valueError, setValueError] = useState("");

  if (!balance) return null;

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    if (parseFloat(data.value) > parseFloat(balance.value)) {
      setValueError(
        "The transfer amount must be less than your current balance"
      );
      setIsLoading(false);
    } else {
      try {
        setValueError("");

        await SendCoin(data);

        const b = parseFloat(balance.value) - parseFloat(data.value);
        localStorage.setItem("balance", b.toString());

        const dateNow = new Date();
        const histories = history;
        const newHistory: History = {
          from: "System",
          to: user.walletId,
          date: `${dateNow.getFullYear()}/${(dateNow.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${dateNow
            .getDate()
            .toString()
            .padStart(2, "0")}`,
          value: data.value,
          type: "1",
        };
        histories.push(newHistory);
        setHistory([...histories]);

        setIsLoading(false);

        onOpen();
      } catch (error) {
        if (isAxiosError(error) && error.response) {
          ErrorNotify(error.response.data.error);
        } else if (isAxiosError(error) && error.message) {
          ErrorNotify(error.message);
        } else console.log(error);
        setIsLoading(false);
      }
    }
  };

  // if (loading)
  //   return (
  //     <Center mt="100px">
  //       <Spinner />
  //     </Center>
  //   );

  // if (error) return <Navigate to="/" />;

  return (
    <>
      <Box>
        <form
          id="phone-form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ paddingTop: "4px" }}
        >
          <FormLabel htmlFor="myWallet">My Wallet Id:</FormLabel>
          <Input
            id="myWallet"
            readOnly
            value={user.walletId}
            sx={InputStyle(false)}
          />

          <Box marginTop="24px">
            <FormLabel htmlFor="receiverWallet">Receiver Wallet Id:</FormLabel>
            <Input
              id="receiverWallet"
              {...register("receiver")}
              placeholder="Receiver Wallet Id"
              sx={InputStyle(!!errors.receiver)}
            />
          </Box>
          {errors.receiver && (
            <Text sx={TextErrorStyle}>{errors.receiver.message}</Text>
          )}

          <Box marginTop="24px">
            <FormLabel htmlFor="value">Amount:</FormLabel>
            <InputGroup>
              <Input
                id="value"
                type="number"
                {...register("value")}
                onFocus={() => console.log(getValues().value)}
                placeholder="Value to Transfer"
                sx={InputStyle(!!errors.value || valueError.length !== 0)}
              />
              <InputRightElement pt="12px" pr="10px" width="99px">
                <Flex gap="8px">
                  <Center>
                    <Text color="#555555">KC</Text>
                  </Center>
                  <Button
                    colorScheme="purple"
                    borderRadius="32px"
                    onClick={() => setValue("value", balance.value)}
                  >
                    max
                  </Button>
                </Flex>
              </InputRightElement>
            </InputGroup>
          </Box>
          {errors.value && (
            <Text sx={TextErrorStyle}>{errors.value.message}</Text>
          )}
          {valueError.length !== 0 && (
            <Text sx={TextErrorStyle}>{valueError}</Text>
          )}
          <Center width="100%" marginTop="64px">
            <Button
              form="phone-form"
              type="submit"
              isDisabled={!isValid || isLoading}
              colorScheme="purple"
              borderRadius="100px"
              width="100%"
            >
              {isLoading ? <Spinner /> : "Send"}
            </Button>
          </Center>
        </form>
      </Box>
      <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        text={`${getValues().value}KC transferred successfully.`}
      />
    </>
  );
};

export default SendForm;
