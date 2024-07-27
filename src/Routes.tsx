import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PrivateRoutes from "./pages/PrivateRoutes";
import RedirectPage from "./pages/RedirectPage";
import Main from "./components/dashboard/main/Main";
import Receive from "./components/dashboard/receive/Receive";
import SendForm from "./components/dashboard/send/SendForm";
import Send from "./components/dashboard/send/Send";
import Buy from "./components/dashboard/buy/Buy";
import History from "./components/dashboard/history/History";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RedirectPage />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "main",
                element: <Main />,
              },
              {
                path: "send",
                element: <Send />,
              },
              {
                path: "receive",
                element: <Receive />,
              },
              {
                path: "buy",
                element: <Buy />,
              },
              {
                path: "history",
                element: <History />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default Router;
