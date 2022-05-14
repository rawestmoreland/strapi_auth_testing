import { useState, createContext } from "react";
export const UserContext = createContext(null);
import { linstance } from "../lib/api";

const UserProvider = ({ children }) => {
  const [dummy, setDummy] = useState();

  async function dummyFunction() {
    return "dummy function invoked";
  }

  const useract = {
    dummy,
    setDummy,
    dummyFunction,
  };

  return (
    <UserContext.Provider value={useract}>{children}</UserContext.Provider>
  );
};
