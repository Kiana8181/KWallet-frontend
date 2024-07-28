import {
  Box,
  Button,
  Center,
  Input,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import ErrorNotify from "../common/ErrorNotify";
import { InputStyle, TextErrorStyle } from "../common/FormStyle";
import { Register } from "../common/api-call";

const schema = z.object({
  phonenumber: z
    .string()
    .length(11, { message: "Please enter a valid phone number." }),

  email: z.string().email({ message: "Please enter a valid email." }),

  firstname: z.string().min(1),

  lastname: z.string().min(1),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(5, { message: "Password should be at least 5 character" }),
});

type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      await Register({
        username: data.phonenumber,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        walletId: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        password: data.password,
      });

      localStorage.setItem("phonenumber", data.phonenumber);
      localStorage.setItem("firstname", data.firstname);
      localStorage.setItem("lastname", data.lastname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("walletId", "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
      localStorage.setItem("password", data.password);
      localStorage.setItem("balance", "0");

      setIsLoading(false);

      navigate("/sign-in");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        ErrorNotify(error.response.data.error);
      } else if (isAxiosError(error) && error.message) {
        ErrorNotify(error.message);
      } else console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Center>
      <form
        id="phone-form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "90%", paddingTop: "4px" }}
      >
        <Box>
          <NumberInput width="100%">
            <NumberInputField
              {...register("phonenumber")}
              autoFocus
              placeholder="Phone Number"
              sx={InputStyle(!!errors.phonenumber)}
            />
          </NumberInput>
        </Box>
        {errors.phonenumber && (
          <Text sx={TextErrorStyle}>{errors.phonenumber.message}</Text>
        )}

        <Box marginTop="16px">
          <Input
            {...register("email")}
            placeholder="Email"
            sx={InputStyle(!!errors.email)}
          />
        </Box>
        {errors.password && (
          <Text sx={TextErrorStyle}>{errors.email?.message}</Text>
        )}

        <Box marginTop="16px">
          <Input
            {...register("firstname")}
            placeholder="First Name"
            sx={InputStyle(!!errors.firstname)}
          />
        </Box>
        {errors.password && (
          <Text sx={TextErrorStyle}>{errors.firstname?.message}</Text>
        )}

        <Box marginTop="16px">
          <Input
            {...register("lastname")}
            placeholder="Last Name"
            sx={InputStyle(!!errors.lastname)}
          />
        </Box>
        {errors.password && (
          <Text sx={TextErrorStyle}>{errors.lastname?.message}</Text>
        )}

        <Box marginTop="16px">
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            sx={InputStyle(!!errors.password)}
          />
        </Box>
        {errors.password && (
          <Text sx={TextErrorStyle}>{errors.password.message}</Text>
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
            {isLoading ? <Spinner /> : "Sign Up"}
          </Button>
        </Center>
      </form>
    </Center>
  );
};

export default SignUpForm;
