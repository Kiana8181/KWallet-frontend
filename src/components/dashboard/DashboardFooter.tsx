import { Box, Center, Grid, useColorMode } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";

const DashboardFooter = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      bottom="0px"
      bg={colorMode === "dark" ? "gray.800" : "purple.50"}
      width="100vw"
      height="56px"
      boxShadow="0px 3px 10px 4px rgba(212, 224, 229, 0.70)"
    >
      <Center height="100%">
        <Grid templateColumns="repeat(5, 1fr)" width="100vw">
          <Center>
            <NavLink to={"/KWallet-frontend/dashboard/buy"} color="#CED4DD">
              {({ isActive }) =>
                isActive ? (
                  <FaRegCreditCard color="#9F7AEA" size={28} />
                ) : (
                  <FaRegCreditCard size={28} />
                )
              }
            </NavLink>
          </Center>

          <Center>
            <NavLink to={"/KWallet-frontend/dashboard/send"}>
              {({ isActive }) =>
                isActive ? (
                  <IoIosSend color="#9F7AEA" size={28} />
                ) : (
                  <IoIosSend size={28} />
                )
              }
            </NavLink>
          </Center>

          <Center>
            <NavLink to={"/KWallet-frontend/dashboard/main"}>
              {({ isActive }) =>
                isActive ? (
                  <MdSpaceDashboard color="#9F7AEA" size={28} />
                ) : (
                  <MdSpaceDashboard size={28} />
                )
              }
            </NavLink>
          </Center>

          <Center>
            <NavLink to={"/KWallet-frontend/dashboard/receive"}>
              {({ isActive }) =>
                isActive ? (
                  <GiReceiveMoney color="#9F7AEA" size={28} />
                ) : (
                  <GiReceiveMoney size={28} />
                )
              }
            </NavLink>
          </Center>

          <Center>
            <NavLink to={"/KWallet-frontend/dashboard/history"}>
              {({ isActive }) =>
                isActive ? (
                  <LuHistory color="#9F7AEA" size={28} />
                ) : (
                  <LuHistory size={28} />
                )
              }
            </NavLink>
          </Center>
        </Grid>
      </Center>
    </Box>
  );
};

export default DashboardFooter;
