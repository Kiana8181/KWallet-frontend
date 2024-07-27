import {
  Box,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import avatar from "../../assets/pictures/Avatar.svg";
import logoDark from "../../assets/pictures/logo-dark.svg";
import logoLight from "../../assets/pictures/logo-light.svg";
import { ColorModeSwitch } from "../common/ColorModeSwitch";
import {
  ContainerStyle,
  EmailStyle,
  LinkStyle,
  NameStyle,
} from "./SidebarStyle";
import useUserStore from "../../../store";

const Sidebar = () => {
  const navigate = useNavigate();

  const user = useUserStore((s) => s.userInformation);

  const { colorMode } = useColorMode();
  const items = [
    {
      title: "Dasboard",
      link: "/dashboard/main",
      icon: <MdSpaceDashboard size="30px" />,
    },
    {
      title: "Send",
      link: "/dashboard/send",
      icon: <IoIosSend size="30px" />,
    },
    {
      title: "Receive",
      link: "/dashboard/receive",
      icon: <GiReceiveMoney size="30px" />,
    },
    {
      title: "Buy",
      link: "/dashboard/buy",
      icon: <FaRegCreditCard size="30px" />,
    },
    {
      title: "History",
      link: "/dashboard/history",
      icon: <LuHistory size="30px" />,
    },
  ];

  return (
    <Box
      bg={colorMode === "dark" ? "purple.600" : "purple.300"}
      sx={ContainerStyle}
    >
      <Box>
        <Center pt="32px">
          <Image src={avatar} />
        </Center>
        <Text sx={NameStyle}>
          {user.firstname} {user.lastname}
        </Text>
        <Text sx={EmailStyle}>{user.email}</Text>
      </Box>

      <Flex gap="12px" flexDirection="column" height="calc(100% - 203px)">
        {items.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {({ isActive }) => (
              <Flex bg={isActive ? "purple.400" : ""} sx={LinkStyle}>
                {item.icon}
                <Center>
                  <Text fontWeight={isActive ? "bold" : ""}>{item.title}</Text>
                </Center>
              </Flex>
            )}
          </NavLink>
        ))}

        <Spacer />

        <Flex
          cursor="pointer"
          mx="16px"
          gap="8px"
          onClick={() => {
            localStorage.removeItem("tokenKey");
            navigate("/home");
          }}
        >
          <ImExit size="30px" />
          <Center>
            <Text>Exit</Text>
          </Center>
        </Flex>

        <Flex mt="16px" gap="4px">
          <Image
            src={colorMode === "light" ? logoDark : logoLight}
            boxSize="40px"
            objectFit="contain"
          />

          <Text fontWeight="bold" fontSize="l" my="auto">
            KWallet
          </Text>

          <Spacer />

          <ColorModeSwitch />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
