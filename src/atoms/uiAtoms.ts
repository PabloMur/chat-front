import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const loaderAtom = atom({
  key: "loaderAtom",
  default: false,
});

export const modal = atom({
  key: "modalAtom",
  default: false,
});

export const shareCodeAtom = atom({
  key: "shareCodeAtom",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const deltedAccountModalAtom = atom({
  key: "deltedAccountModalAtom",
  default: false,
});

export const burgerAtom = atom({
  key: "burgerAtom",
  default: false,
});

export const menuDesplegableAtom = atom({
  key: "menuDesplegableAtom",
  default: false,
});
