import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import MobileMenu from "../components/dashboard/MobileMenu";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/home" && (
        <Show below="lg">
          <MobileMenu />
        </Show>
      )}

      <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `"main"`,
        }}
        templateColumns={{
          lg: "repeat(6, 1fr)",
          base: "1fr",
        }}
        height="calc(100vh - 72px)"
      >
        <Show above="lg">
          <GridItem height="100vh" p="16px" area="aside">
            <Sidebar />
          </GridItem>
        </Show>

        <GridItem area="main" colSpan={5}>
          <Outlet />
        </GridItem>
      </Grid>

      <Show below="lg">
        <DashboardFooter />
      </Show>
    </>
  );
};

export default Dashboard;
