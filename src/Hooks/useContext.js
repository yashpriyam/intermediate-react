import { useState, createContext, useContext } from "react";

const PropSetContext = createContext({
  stateVar: "",
  setState: () => {}
});

export const UseContextApp = () => {
  const [state, setState] = useState("string1");
  return (
    <PropSetContext.Provider value={{ stateVar: state, setState }}>
      <Level1 />
    </PropSetContext.Provider>
  );
};

const Level1 = () => <Level2 />;

const Level2 = () => <Level3 />;

const Level3 = () => <Level4 />;

const Level4 = () => <Level5 />;

const Level5 = () => {
  const { stateVar, setState } = useContext(PropSetContext);
  return (
    <h1
      onClick={() => setState((x) => (x === "string1" ? "string2" : "string1"))}
    >
      {stateVar}
    </h1>
  );
};
