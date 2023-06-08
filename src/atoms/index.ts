import { atom } from "recoil";

export const emailAtom = atom({
  key: "email",
  default: "",
});

export const isUser = atom({
  key: "isUser",
  default: false,
});

export const userTokenAtom = atom({
  key: "userToken",
  default: "",
});
