import { create } from "zustand";
import { User } from "./src/entities/User";
import { History } from "./src/entities/History";
import { Balance } from "./src/entities/Balance";

interface Information {
  userInformation: User;
  userHistory: History[];
  userBalance: Balance;
  setUserFirstname: (f: string) => void;
  setUserLastname: (l: string) => void;
  setUserEmail: (e: string) => void;
  setUserWalletId: (w: string) => void;
  setUserUsername: (u: string) => void;
  setUserPassword: (p: string) => void;
  setUserHistory: (h: History[]) => void;
  setUserBalance: (b: string) => void;
}

const useUserStore = create<Information>((set) => ({
  userInformation: {} as User,
  userHistory: [],
  userBalance: { value: "0" },
  setUserFirstname: (firstname) =>
    set((store) => ({
      userInformation: { ...store.userInformation, firstname },
    })),
  setUserLastname: (lastname) =>
    set((store) => ({
      userInformation: { ...store.userInformation, lastname },
    })),
  setUserEmail: (email) =>
    set((store) => ({
      userInformation: { ...store.userInformation, email },
    })),
  setUserWalletId: (walletId) =>
    set((store) => ({
      userInformation: { ...store.userInformation, walletId },
    })),
  setUserUsername: (username) =>
    set((store) => ({
      userInformation: { ...store.userInformation, username },
    })),
  setUserPassword: (password) =>
    set((store) => ({
      userInformation: { ...store.userInformation, password },
    })),
  setUserHistory: (h: History[]) =>
    set(() => ({
      userHistory: h,
    })),
  setUserBalance: (b: string) =>
    set(() => ({
      userBalance: { value: b },
    })),
}));

export default useUserStore;
