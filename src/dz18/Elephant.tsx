import { useState } from "react";

type PropsType = {
  changeConditionToCounter: () => void;
};
export const Elephant = ({ changeConditionToCounter }: PropsType) => {
  const [weight, setWeight] = useState(1);
  const increaseWeight = () => {
    setWeight(weight + 0.2);
  };
  const decreaseWeight = () => {
    setWeight(weight - 0.2);
  };
  return (
    <>
      <div>
        <button onClick={increaseWeight}>Кормить полезной едой</button>
        {weight > 1 && (
          <button onClick={decreaseWeight}>Кормить вредной едой</button>
        )}
      </div>
      <span
        style={{
          transform: `scale(${weight})`,
          display: "inline-block", // ✅ КЛЮЧЕВОЕ!
          lineHeight: 1, // ✅ Убирает лишние отступы
        }}
      >
        🐘
      </span>
      <div>
        <button onClick={changeConditionToCounter}>
          Давай сыграем еще раз
        </button>
      </div>
    </>
  );
};
