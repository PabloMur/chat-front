import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const testImagen =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const { persistAtom } = recoilPersist();

export const emailAtom = atom({
  key: "email",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
export const userImageAtom = atom({
  key: "userImageAtom",
  default: testImagen,
  effects_UNSTABLE: [persistAtom],
});
export const userImageUploadUrlAtom = atom({
  key: "userImageUploadUrlAtom",
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

export const myGuestRoomsAtom = atom({
  key: "myGuestRoomsAtom",
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
