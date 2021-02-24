import UseEffectApp from "../src/Hooks/useEffect";
import { UseContextApp } from "./Hooks/useContext";
import { RefComp } from "./Hooks/useRef";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UseEffectApp />
      <UseContextApp />
      <RefComp />
    </div>
  );
}
