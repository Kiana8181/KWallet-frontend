import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../entities/User";

const useAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const token = localStorage.getItem("tokenKey");

    if (!token || token !== "LoginWallet") {
      navigate("/home");
      return;
    }
  }, []);

  return { user, setUser };
};

export default useAuth;
