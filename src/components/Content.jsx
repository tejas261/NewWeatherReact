import React, { useContext, useEffect } from "react";
import CurrentTemp from "./contentComponents/CurrentTemp";
import Next5Days from "./contentComponents/Next5Days";
import Highlights from "./contentComponents/Highlights";
import Hourly from "./contentComponents/Hourly";

function Content() {
  return (
    <div className="main flex xs:max-lg:flex-col w-full">
      <div className="left my-5 flex flex-col xs:max-lg:flex-row xs:max-lg:w-full xs:max-lg:justify-evenly w-[50rem] h-[34rem] m-[2rem] xs:max-lg:min-w-[752px] ">
        <CurrentTemp />
        <Next5Days />
      </div>

      <div className="right w-full min-w-[840px]">
        <Highlights />
        <Hourly />
      </div>
    </div>
  );
}

export default Content;
