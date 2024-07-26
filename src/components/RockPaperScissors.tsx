import Background from "./Background/Background"
import Battlefield from "./Battlefield/Battlefield"
import useRockPaperScissors from "./useRockPaperScissors"
import Competitor from "./Competitor/Competitor"


const RockPaperScissors: React.FC = () => {

  const { userChoice,
    computerChoice,
    result,
    handleUserChoice,
    restart,
    userPoints, computerPoints
  } = useRockPaperScissors()

  return (
    <Background >
      <div className="flex justify-center items-center gap-8 pb-20 h-full">
        <Competitor name="Usuario" points={userPoints} />
        <Battlefield userChoice={userChoice} computerChoice={computerChoice} result={result} handleUserChoice={handleUserChoice} restart={restart} />
        <Competitor name="Computadora" points={computerPoints} />
      </div>
    </Background >
  )
}
export default RockPaperScissors
