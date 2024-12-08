import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import { AppState, Data } from "../types";
import { fetchData } from "../services";

const initialState: AppState = {
  data: [],
  actions: {
    loadData: () => {},
  },
};

export const Store = createContext(initialState);

export const StoreProvider = (props: PropsWithChildren): ReactElement => {
  const [appData, setData] = useState<Data>([]);

  const loadData = () => {
    const response = fetchData();
    setData(response);
  };

  return (
    <Store.Provider value={{ data: appData, actions: { loadData } }}>
      {props.children}
    </Store.Provider>
  );
};
