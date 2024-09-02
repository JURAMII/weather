import { useEffect, useState } from "react";
import axios from "axios";
import './componentStyle.scss';

export default function Weathers() {
  type weathers = { id: number; temp: number; main: string; icon?: string };
  const [weather, setWeather] = useState<weathers>();

  const getWeather = () => {
    const myKey = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${myKey}`
      )
      .then((res) => {
        const datas = res.data;
        setWeather({
          id: datas.weather[0].id,
          temp: Math.round(datas.main.temp - 273.15),
          main: datas.weather[0].main,
          // icon: datas.weather[0].icon,
        });
      });
  };
  // const weatherIcon = `https://openweathermap.org/img/wn/${weather?.icon}.png`; 기본아이콘

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="weathersWrap">
      <h4>{weather?.temp}<span>°</span></h4>
      <img src={`${process.env.PUBLIC_URL}/img/${weather?.main}.png`} alt="날씨 아이콘" />
      <h5>{weather?.main}</h5>
    </div>
  );
}
