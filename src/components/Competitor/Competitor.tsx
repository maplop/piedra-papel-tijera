interface CompetitorProps {
  name: string,
  points: number
}

const Competitor: React.FC<CompetitorProps> = ({ name, points }) => {
  return (


    <div className="flex flex-col justify-between items-center w-36 h-52 p-4  backdrop-filter backdrop-blur-md border-2 border-white rounded-lg shadow-md  bg-black/30">
      <div className="font-bebas tracking-wider text-2xl font-extrabold text-white  ">
        {name}
      </div>
      <div className="font-bebas text-8xl text-white">
        {points}
      </div>
      <div className="font-montse text-black">
        puntos
      </div>
    </div>

  )
}
export default Competitor