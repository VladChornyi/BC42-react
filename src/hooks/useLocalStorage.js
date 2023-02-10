import { useEffect, useState } from "react";
import { getLocalData } from "../helpers/getLocalData";

export const useLocalStorage = (key, initialState) => {
  const [data, setData] = useState(() => getLocalData(key) ?? initialState);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
