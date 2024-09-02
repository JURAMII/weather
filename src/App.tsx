import { useEffect, useRef } from 'react';
import './App.scss';
import Times from './assets/component/times';
import Weathers from './assets/component/weathers';

function App() {
 
  //배경색
  const bgColor = useRef<HTMLDivElement>(null);
  
  function bg (){
    const bgDate = new Date();
    const bgHour = bgDate.getHours();

    if(bgHour<=18){
      if(bgColor.current !== null){
        bgColor.current.style.backgroundColor = "#FF8C00"; 
      }
    }else{
      if(bgColor.current !== null){
        bgColor.current.style.backgroundColor = "#191970"; 
      }
    }
  }

  useEffect(()=>{bg()},[bg])



  return (
    <div className="App">
      <div className="cont" ref={bgColor}>
      <Times/>
      <Weathers/>
      </div>
    </div>
  );
}

export default App;
