import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
 
  //날씨
  type weathers = {id: number; temp: number; main: string; icon: string}
  const [weather, setWeather] = useState<weathers>();

  const getWeather = () => {
    const myKey = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${myKey}`).then((res)=>{
      const datas = res.data;
      setWeather({
        id : datas.weather[0].id,
        temp : Math.round(datas.main.temp - 273.15),
        main: datas.weather[0].main,
        icon: datas.weather[0].icon
      })
    })
  }
  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.icon}.png`;

  //날짜, 시간
  const date = new Date();
  const day = date.getDay();
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'The', 'Fri', 'Sat'];
  const today = dayList[day];
  const hour =(date.getHours()<10? '0' + date.getHours() : date.getHours());
  const minute = (date.getMinutes()<10? '0' + date.getMinutes() : date.getMinutes());
  const timeNow = `${hour}:${minute}`;

  useEffect(()=>{getWeather()},[])


  return (
    <div className="App">
     <h2>SEOUL</h2>
     <h3>{today} {timeNow}</h3>
     <h4>{weather?.temp}°</h4>
     <div><img src={weatherIcon} alt="날씨 아이콘" /></div>
     <h5>{weather?.main}</h5>
    </div>
  );
}

export default App;
