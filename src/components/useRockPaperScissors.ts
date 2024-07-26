import { useState } from "react";
import { choices } from "../data/objects";

const useRockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [computerPoints, setComputerPoints] = useState<number>(0);

  const determineWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) return "Empate 🤝";
    if (
      (userChoice === "Piedra" && computerChoice === "Tijera") ||
      (userChoice === "Papel" && computerChoice === "Piedra") ||
      (userChoice === "Tijera" && computerChoice === "Papel")
    ) {
      return "¡Has ganado! 💪";
    }
    return "Has perdido 😢";
  };

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    const gameResult = determineWinner(choice, computerChoice);
    setResult(gameResult);

    if (gameResult === "¡Has ganado! 💪") {
      setUserPoints((prevPoints) => prevPoints + 1);
    } else if (gameResult === "Has perdido 😢") {
      setComputerPoints((prevPoints) => prevPoints + 1);
    }

    setTimeout(() => {
      setResult(null);
    }, 1500);
  };

  const restart = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setUserPoints(0);
    setComputerPoints(0);
  };

  return {
    userChoice,
    computerChoice,
    result,
    handleUserChoice,
    restart,
    userPoints,
    computerPoints,
  };
};
export default useRockPaperScissors;
