import {useState} from 'react';
export const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);

  const counterPlus = (value = 1) => {
    setCounter(counter + value);
  };

  const counterMinus = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  const counterReset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    counterPlus,
    counterMinus,
    counterReset,
  };
};
