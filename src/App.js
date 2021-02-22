import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  // same as :
  // useEffect(() => {
  //   const timer = setTimeout(() => setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // });
  return (
    <div className="App">
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}
