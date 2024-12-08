import data from "../assets/data.json";
import { Data } from "../types";

export const fetchData = (): Data => {
  return data.data;
};
