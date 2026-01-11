import { useEffect, useState } from "react";

const Counter = () => {
  const { count, inc, dec, reset, incStep } = useCounter(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>уменьшить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={incStep}>Увеличить на 5</button>
    </>
  );
};

export default Counter;

const useCounter = (
  startValue = 0,
  startStep: number = 1,
  autoResetTime = 0,
) => {
  const [count, setCount] = useState(startValue);
  const [step, setStep] = useState(startStep);

  useEffect(() => {
    setInterval(() => {
      setCount(0);
    }, 7000);
  }, []);

  const inc = () => {
    setCount(count + step);
  };
  const dec = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(startValue);
  };
  const incStep = () => {
    setStep(5);
  };

  return { count, inc, dec, reset, incStep };
};
