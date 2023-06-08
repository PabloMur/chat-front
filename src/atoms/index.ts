import { atom } from "recoil";

export const emailAtom = atom({
  key: "email",
  default: "",
});

export const isUser = atom({
  key: "isUser",
  default: false,
});
