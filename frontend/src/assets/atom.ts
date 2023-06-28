import { atom } from "recoil";
export const BoundState = atom({
  key: "Bound",
  default: [] as any,
});

export const PhaseState = atom({
  key: "Phase",
  default: ["T", "T'", "H"],
});
