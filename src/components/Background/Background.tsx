import React from "react"
import { useBackground } from "./useBackground"

interface BackgroundProps {
  children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = ({ children }) => {

  const { backgroundNumber, changeBackgroundNumber } = useBackground()

  return (
    <div
      className="h-screen w-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/backgrounds/background-${backgroundNumber}.jpg')`
      }}
    >
      {children}
      <button
        className="absolute bottom-5 left-5 p-2 bg-gradient-to-r from-blue-500 to-blue-900 font-medium text-white border-2 border-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 flex items-center gap-2"
        onClick={changeBackgroundNumber}
      >
        Cambiar Pista
      </button>
    </div>
  )
}
export default Background
