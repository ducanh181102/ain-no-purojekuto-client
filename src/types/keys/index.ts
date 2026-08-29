import { TableStatus, UpperCaseTableStatus } from "@/constants/keys";

export type TableStatusKey =
  typeof TableStatus[keyof typeof TableStatus];
  
export type UpperCaseTableStatusKey =
  typeof UpperCaseTableStatus[keyof typeof UpperCaseTableStatus];

