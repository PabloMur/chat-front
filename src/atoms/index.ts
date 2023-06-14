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

export const roomIdAtom = atom({
  key: "roomIdAtom",
  default: "00000",
});

export const realtimeRoomIdAtom = atom({
  key: "realtimeRoomIdAtom",
  default: "realtimecode",
});

export const roomCreatorAtom = atom({
  key: "roomCreatorAtom",
  default: false,
});

export const roomGuestAtom = atom({
  key: "roomGuestAtom",
  default: false,
});

export const userLogged = atom({
  key: "userLogged",
  default: false,
});
