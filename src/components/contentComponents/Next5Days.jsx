import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { WeatherContext } from "../../context/WeatherContext";

function Next5Days() {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const { weatherdata } = useContext(WeatherContext);

  if (!weatherdata || !weatherdata.currentConditions || !weatherdata.days || weatherdata.days.length === 0) {
    return <Skeleton count={8} className="m-8"/>
  }
  return (
    <div>
      <div className="p-8 lg:my-10 border-solid border-2 border-black bg-black rounded-3xl w-full h-[35rem]">
        <h1 className="m-2 text-3xl">Next 7 days</h1>
      {weatherdata.days.slice(1,8).map((days,index)=>{
       return( 
       <div key={index++} className="grid text-2xl mt-2 grid-cols-3">
       <div className="flex">
        <h1>{days.feelslike}<sup>o</sup>C</h1>
       </div>
       <h3>{new Date(days.datetime).getUTCDate() + " " + month[new Date().getUTCMonth()]} </h3>
       <h3 className="pl-5"> {weekday[new Date(days.datetime).getUTCDay()]}</h3>
     </div>)
      })}
      </div>
    </div>
  );
}

export default Next5Days;
