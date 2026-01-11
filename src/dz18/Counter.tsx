import { useState } from "react";

type PropsType = {
  changeConditionToElephant: () => void;
};

export const Counter = ({ changeConditionToElephant }: PropsType) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    if (count === 5) {
      changeConditionToElephant();
    }
  };

  return (
    <div>
      <h2>Нажми на кнопку 4 раза, чтобы увидеть слона"</h2>
      <button onClick={increaseCount}>{count}</button>
    </div>
  );
};
