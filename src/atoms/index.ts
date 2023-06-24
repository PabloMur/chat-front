import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const emailAtom = atom({
  key: "email",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
  key: "userNameAtom",
  default: "Unnamed",
  effects_UNSTABLE: [persistAtom],
});

export const isUser = atom({
  key: "isUser",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userTokenAtom = atom({
  key: "userToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const roomIdAtom = atom({
  key: "roomIdAtom",
  default: "00000",
  effects_UNSTABLE: [persistAtom],
});

export const realtimeRoomIdAtom = atom({
  key: "realtimeRoomIdAtom",
  default: "realtimecode",
  effects_UNSTABLE: [persistAtom],
});

export const myRoomsAtom = atom({
  key: "myRoomsAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const roomCreatorAtom = atom({
  key: "roomCreatorAtom",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userLogged = atom({
  key: "userLogged",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
