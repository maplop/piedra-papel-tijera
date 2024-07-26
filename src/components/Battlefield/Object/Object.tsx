interface ObjectProps {
  choice: string,
  handleUserChoice?: (choice: string) => void
  size?: number,
  showName?: boolean
}

const Object: React.FC<ObjectProps> = ({ choice, handleUserChoice, size = 82, showName = true }) => {

  const handleClick = () => {
    if (handleUserChoice) {
      handleUserChoice(choice);
    }
  };

  return (
    <div
      className="font-montse text-sm font-black cursor-pointer  border-4 rounded-lg border-white text-center bg-white"
      onClick={handleClick}
    >
      <div className="rounded overflow-hidden max-w-80"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img src={`/${choice}.jpg`} alt={`${choice}-img`} />
      </div>
      {showName && choice}
    </div>
  )
}
export default Object
