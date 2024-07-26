import ObjectList from "./Object/ObjectList";
import Object from "./Object/Object";
import Field from "./Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

interface BattlefieldProps {
  userChoice: string | null,
  computerChoice: string | null,
  result: string | null,
  handleUserChoice: (choice: string) => void,
  restart: () => void,
}

const Battlefield: React.FC<BattlefieldProps> = ({ userChoice, computerChoice, result, handleUserChoice, restart }) => {

  return (
    <div className="flex justify-center items-center p-5  backdrop-filter backdrop-blur-md">
      <div className="flex justify-center items-center gap-10">
        <Field>
          <div className="flex flex-col gap-3">
            <ObjectList handleUserChoice={handleUserChoice} />
          </div>
          {userChoice ? <Object choice={userChoice} size={120} showName={false} /> : <div className="w-32" />}
        </Field>
        <div className="flex flex-col justify-between items-center">
          {result && (
            <div className="font-bebas text-3xl tracking-widest absolute top-5 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-md text-center text-white font-bold bg-gradient-to-r from-purple-700 to-blue-500 border-4 border-yellow-400 neon-border">
              {result}
            </div>
          )}
          <div className="w-32 flex justify-center items-center">
            <img src="/vs.png" alt="vs-img" className="w-full h-full object-contain" />
          </div>
          <button
            className="absolute bottom-5  left-1/2 transform -translate-x-1/2 p-2 bg-gradient-to-r from-red-400 to-red-900  text-white border-2 border-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 flex items-center gap-2"
            onClick={restart}>
            <FontAwesomeIcon icon={faRedoAlt} />
          </button>
        </div>
        <Field>
          {computerChoice ? <Object choice={computerChoice} size={120} showName={false} /> : <div className="w-32" />}
          <div className="flex flex-col gap-3">
            <ObjectList />
          </div>
        </Field>
      </div>
    </div>
  );
};

export default Battlefield;
