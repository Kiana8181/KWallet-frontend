import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserStore from "../../store";
import { useEffect } from "react";

const RedirectPage = () => {
  const data = useUserStore();
  const user = useAuth();

  if (!user) return <Navigate to="/KWallet-frontend/home" />;

  useEffect(() => {
    data.setUserUsername(localStorage.getItem("phonenumber")!);
    data.setUserFirstname(localStorage.getItem("firstname")!);
    data.setUserLastname(localStorage.getItem("lastname")!);
    data.setUserEmail(localStorage.getItem("email")!);
    data.setUserWalletId(localStorage.getItem("walletId")!);
    data.setUserPassword(localStorage.getItem("password")!);
    data.setUserBalance(localStorage.getItem("balance")!);
  }, []);

  return <Navigate to="/KWallet-frontend/dashboard/main" />;
};

export default RedirectPage;
