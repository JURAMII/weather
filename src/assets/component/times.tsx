import './componentStyle.scss'

export default function Times() {

  //날짜, 시간
  const date = new Date();
  const day = date.getDay();
  const dayList = ["Sun", "Mon", "Tue", "Wed", "The", "Fri", "Sat"];
  const today = dayList[day];
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const timeNow = `${hour}:${minute}`;

  return (
    <div className='timesWrap'>
     <h2>SEOUL</h2>
     <h3>{today} {timeNow}</h3>
    </div>
  )
}
