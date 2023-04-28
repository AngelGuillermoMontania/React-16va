import { useState, createContext } from "react";

export const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const aumentarCount = () => {
    return setCount(count + 1);
  };

  const restarCount = () => {
    return setCount(count - 1);
  };

  const resetCount = () => {
    return setCount(0);
  };

  const controladorCount = (num) => {
    if (num - 1 === 0) {
      return num;
    } else {
      return num - 1;
    }
  };

  const data = {
    count,
    aumentarCount,
    restarCount,
    resetCount,
  };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export default CountContextProvider;
