import { Counter } from "../dz18/Counter.tsx";
import { Elephant } from "../dz18/Elephant.tsx";
import { useState } from "react";

export const Dz18 = () => {
  const [condition, setCondition] = useState("counter");

  const changeConditionToElephant = () => {
    setCondition("elephant");
  };
  const changeConditionToCounter = () => {
    setCondition("counter");
  };
  return (
    <div>
      {" "}
      {condition === "counter" && (
        <Counter changeConditionToElephant={changeConditionToElephant} />
      )}
      {condition === "elephant" && (
        <Elephant changeConditionToCounter={changeConditionToCounter} />
      )}
    </div>
  );
};
