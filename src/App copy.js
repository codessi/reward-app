import logo from "./logo.svg"
import "./App.css"
import girl from "./asset/images.jpeg"
import gift from "./asset/gift.png"
import confetti from './asset/confetti-25.webp'
import { useEffect, useState } from "react"

function App() {
  const [position, setPosition] = useState(0)
  // tailwind

  console.log(position)
    useEffect(() => {
    setPosition(+localStorage.getItem("position"))

  
  }, [])
 

  useEffect(() => {
    

  }, [position])


  
  
  
  console.log(localStorage)

  const handleInc = async() => {
  
    await position < 80 ? setPosition(position + 10) : setPosition(0)
    localStorage.setItem('position', position);
    
  }

  const handleDec =() => position<0? setPosition(position - 10): setPosition(0)
  return (
    <div className="App h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl text-red-700 mb-12 text-center font-bold "> For My Christmas Gift</h1>
        <div className="relative w-screen border h-52 ">
     
          <img src={gift} className="absolute right-0" alt="" />
          <img 
            className={`absolute left-[${position}%] self-center`}
            src={girl}
          />
         {position===80 && <img src={confetti} className="absolute left-[70%] top-[-40%]" alt="" />}
        </div>

        <div className="border mt-10 border-black border-b-4 w-screen"></div>
      </div>
      <div className="flex gap-24">
        <button
          className="border w-52 rounded bg-red-600 text-white    text-6xl "
          onClick={handleDec}
        >
          {" "}
          <div>&#8592;</div> <div>NAUTY</div>
        </button>
        <button
          className="border w-52 rounded bg-red-600 text-white    text-6xl "
          onClick={handleInc}
        >
          {" "}
          &#8594; <div>NICE</div>
        </button>
      </div>
    </div>
  )
}

export default App
