import { useState, useEffect } from "react";
import "./counter.css";

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = 1;
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + step);
    }, 1000);
    return () => clearInterval(timer);
  }, [end]);

  return <span className="counter">{count.toLocaleString()}</span>;
}

export default Counter;

