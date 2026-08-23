import { TableStatusKey, UpperCaseTableStatusKey } from "@/constants/keys";

export type TableStatusKey =
  typeof TableStatusKey[keyof typeof TableStatusKey];
  
export type UpperCaseTableStatusKey =
  typeof UpperCaseTableStatusKey[keyof typeof UpperCaseTableStatusKey];

