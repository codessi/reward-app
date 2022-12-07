import logo from './logo.svg';
import './App.css';
import girl from './asset/images.jpeg'
import gift from './asset/gift.png'
import { useState } from 'react';

function App() {
const [postion, setPostion] = useState(0)
  // tailwind


  return (
    <div className="App h-screen flex flex-col justify-center items-center">
          <div>
            <h1 className="text-1xl font-bold underline">
                  Hello world!
                </h1>
                <div className='relative w-100 h-52'>
                  <img className='absolute left-0' src={girl}></img>
                  <img className='absolute right-0 self-center' src={gift} alt="" />
                </div>

                <div className='border mt-10 border-black border-b-4 w-[80vw]'></div>
          </div>
          <div className='flex'>
          <button className='border rounded bg-red-600 text-white w-24     text-6xl '> &#8592;</button>
            <button className='border rounded bg-red-600 text-white w-24    text-6xl ' onClick={}> &#8594;</button>
          </div>

    </div>
  );
}

export default App;
