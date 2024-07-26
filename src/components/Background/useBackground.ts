import { useState } from "react";

export const useBackground = () => {
  const [backgroundNumber, setBackgroundNumber] = useState<number>(1);

  const changeBackgroundNumber = () => {
    setBackgroundNumber(
      (prevBackgroundNumber) => (prevBackgroundNumber % 4) + 1
    );
  };

  return { backgroundNumber, changeBackgroundNumber };
};
