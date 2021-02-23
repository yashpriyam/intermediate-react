import { useRef, useState } from "react";

export const RefComp = () => {
  const newRef = useRef(0);
  const primitiveRef = useRef(0);
  const [state, setState] = useState(0);

  const headerClick = () => {
    primitiveRef.current++;
    setState(state + 1);
    newRef.current.innerHTML = state;
  };
  return (
    <div onClick={headerClick}>
      <h2 ref={newRef}>{`${newRef.current.innerHTML}`}</h2>
      <h2>{`PrimitiveRef Count: ${primitiveRef.current}`}</h2>
      <h2>{`State Count: ${state}`}</h2>
    </div>
  );
};
