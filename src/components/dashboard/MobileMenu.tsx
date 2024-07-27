import {
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitch } from "../common/ColorModeSwitch";
import { MobileMenuContainerStyle } from "./DashboardStyle";

const MobileMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton sx={MobileMenuContainerStyle}>
        <IoMenu size="30" />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Setting">
          <MenuItem _focus={{}}>
            <Flex width="100%">
              <Text>Color Mode</Text>
              <Spacer />
              <ColorModeSwitch />
            </Flex>
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            localStorage.removeItem("tokenKey");
            navigate("/KWallet-frontend/home");
          }}
        >
          <Flex cursor="pointer" mx="16px" gap="8px">
            <ImExit size="30px" />
            <Center>
              <Text>Exit</Text>
            </Center>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
