import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface DynamicContentContextTypes {
  sort: string;
  page: number;
  limit: number;
  start: number;
  where: any;
  isLoading: boolean;
  error: any;
  data: any;
  isSuccess: boolean;
  setSort: Dispatch<SetStateAction<string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setPage: Dispatch<SetStateAction<number>>;
  setWhere: Dispatch<SetStateAction<any>>;
  setStart: Dispatch<SetStateAction<number>>;
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
