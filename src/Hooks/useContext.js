import { useContext, useState } from "react";

export function UseContextApp() {
  const [state, setState] = useState(["yash"]);

  const buttonClick = () => {
    setState(["priyam"]);
  };
  return (
    <>
      <ParentComp state={state} onClick={() => setState} />
    </>
  );
}

const ParentComp = (props) => <Level1 state={props} />;

const Level1 = (props) => <Level2 state={props} />;

const Level2 = (props) => <Level3 state={props} />;

const Level3 = (props) => <Level4 state={props} />;

const Level4 = (props) => {
  console.log(Object.keys(props));
  return (
    <>
      <div onClick={() => props.onClick()}>{props.state}</div>
    </>
  );
};
