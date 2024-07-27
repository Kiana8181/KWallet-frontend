import { Box, Center, Image, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import notFound from "../assets/pictures/404.svg";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Center height="100vh" width="100vw">
        <Box width="100%">
          <Center>
            <Image width="35%" src={notFound} alt="not-found" />
          </Center>
          <Center>
            <Text fontSize="5xl" textAlign="center">
              {isRouteErrorResponse(error)
                ? "invalide page"
                : "Sorry, an unexpected error has occurred."}
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default ErrorPage;
