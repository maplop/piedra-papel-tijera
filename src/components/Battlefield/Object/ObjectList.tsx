import { choices } from "../../../data/objects"
import Object from "./Object"

interface ObjectListProps {
  handleUserChoice?: (choice: string) => void
}

const ObjectList: React.FC<ObjectListProps> = ({ handleUserChoice }) => {
  return (
    <div className="flex flex-col gap-3 ">
      {choices.map((choice) => (
        <Object choice={choice} handleUserChoice={handleUserChoice} />
      ))}
    </div>
  )
}
export default ObjectList
