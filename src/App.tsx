import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const myKey = process.env.REACT_APP_API_KEY;
  // console.log(myKey)
  type weathers = {id: number; temp: number; main: string; icon: string}
  const [weather, setWeather] = useState<weathers>();

  const getWeather = () => {
    const myKey = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${myKey}`).then((res)=>{
      const datas = res.data;
      setWeather({
        id : datas.weather[0].id,
        temp : datas.main.temp,
        main: datas.weather[0].main,
        icon: datas.weather[0].icon
      })
    })
  }
  console.log(weather)
  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.icon}.png`;
  useEffect(()=>{getWeather()},[])


  return (
    <div className="App">
     <div>오늘의 서울 날씨 입니다.</div>
     <div>{weather?.main}</div>
     <div><img src={weatherIcon} alt="날씨 아이콘" /></div>
     <div>{weather?.temp}</div>
    </div>
  );
}

export default App;
