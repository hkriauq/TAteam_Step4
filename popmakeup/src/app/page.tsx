"use client";

import SelectYearMonth from "./components/button/SelectYearMonth";
import ChartBar from "./components/graph/ChartBar";
import ChartDoughnut from "./components/graph/ChartDoughnut";
import ChartHorBar from "./components/graph/ChartHorBar";
import Summary from "./components/graph/Summary";


export default function Home() {
  //const { userState } = useAppContext();
  
  return (
    <div className="flex flex-col h-screen mt-20" style={{backgroundColor:"var(--sub3)"}}>
      <div className="flex justify-center items-center w-full mb-3">
        <div className="select-year-month"><SelectYearMonth /></div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="chart-doughnut mx-2"><Summary /></div>
        <div className="chart-doughnut mx-2"><ChartDoughnut /></div>
        <div className="chart-Horbar mx-2"><ChartHorBar /></div>
      </div>
      <div className="flex justify-center items-center w-full mt-5 mb-60">
        <div className="chart-bar"><ChartBar /></div>
      </div>
    </div>
  );
}

