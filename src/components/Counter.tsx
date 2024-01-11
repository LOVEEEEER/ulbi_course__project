import { FC, useState } from "react";
import classes from "./Counter.module.scss";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
