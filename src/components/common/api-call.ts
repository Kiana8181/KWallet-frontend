import { User } from "../../entities/User";

function Login(body: { phonenumber: string; password: string }) {
  if (
    body.phonenumber === localStorage.getItem("phonenumber") &&
    body.password === localStorage.getItem("password")
  )
    localStorage.setItem("tokenKey", "LoginWallet");

  return;
}

function Register(body: User) {
  return body;
}

function SendCoin(body: any) {
  return;
}

function BuyCoin(body: any) {
  return;
}

export { Login, Register, SendCoin, BuyCoin };
