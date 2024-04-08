"use client";

import ChartBar from "./components/graph/ChartBar";


export default function Home() {
  //const { userState } = useAppContext();
  
  return (
      <div className="flex h-screen" style={{backgroundColor:"var(--sub6)"}}>
        <div className="flex">
          <div className="chart-bar"><ChartBar /></div>
        </div>
      </div>
  );
}

