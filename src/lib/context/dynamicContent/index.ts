import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface DynamicContentContextTypes {
  order: string;
  page: number;
  take: number;
  skip: number;
  where: any;
  isLoading: boolean;
  error: any;
  data: any;
  isSuccess: boolean;
  setOrder: Dispatch<SetStateAction<string>>;
  setTake: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  setWhere: Dispatch<SetStateAction<any>>;
  setSkip: Dispatch<SetStateAction<number>>;
  setTag: Dispatch<SetStateAction<string | null>>;
  tag: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
  category: string | null;
}

export const DynamicContentContext = createContext<DynamicContentContextTypes>(
  {} as DynamicContentContextTypes
);

export default function useDynamicContent() {
  return useContext(DynamicContentContext);
}
