import {
  Box,
  Button,
  HStack,
  Text,
  Image,
  Show,
  Spacer,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import logoLight from "../../assets/pictures/logo-light.svg";
import logoDark from "../../assets/pictures/logo-dark.svg";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ColorModeSwitch } from "./ColorModeSwitch";

interface Props {
  onOpen?: () => void;
}

const NavBar = ({ onOpen }: Props) => {
  const { pathname } = useLocation();
  const { colorMode } = useColorMode();

  return (
    <HStack
      zIndex="999"
      position="fixed"
      top="0"
      width="100%"
      bg="purple.300"
      padding="16px"
      boxShadow="0px 0px 10px 4px rgba(212, 224, 229, 0.30)"
    >
      {pathname !== "/KWallet-frontend/home" && (
        <Box>
          <Show below="lg">
            <IoMenu size="30" onClick={onOpen} cursor="pointer" />
          </Show>
        </Box>
      )}
      <Link to="/">
        <Image
          src={colorMode === "light" ? logoDark : logoLight}
          boxSize="40px"
          objectFit="contain"
        ></Image>
      </Link>
      <Text fontWeight="bold" fontSize="xl">
        KWallet
      </Text>
      <Spacer />
      <ColorModeSwitch />
      {pathname === "/KWallet-frontend/home" &&
        !localStorage.getItem("tokenKey") && (
          <Button colorScheme="purple" borderRadius="24px" p="8px">
            <NavLink to="/KWallet-frontend/sign-in">Sign In</NavLink>
          </Button>
        )}
      {pathname === "/KWallet-frontend/home" &&
        localStorage.getItem("tokenKey") && (
          <Button colorScheme="purple" borderRadius="24px" p="8px">
            <NavLink to="/KWallet-frontend/dashboard/main">Dashboard</NavLink>
          </Button>
        )}
    </HStack>
  );
};

export default NavBar;
