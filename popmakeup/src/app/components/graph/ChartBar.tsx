"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBar = () => {

    const labels = ['品川本社', '札幌支社', '静岡支社', '名古屋支社', '恵比寿支社', '仙台支社', '広島支社', '福岡支社'];

    const data = {
      labels: labels,
      datasets: [{
        //label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40 ,30],
        backgroundColor: [
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)',
            'rgba(232, 211, 202, 0.8)'
        ],
        borderColor: [
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)',
            'rgb(189, 163, 147)'
          ],
          borderWidth: 1
        }]
      };


  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="flex flex-col aline-center justify-center mb-5">
      <div className="title flex aline-center justify-center mb-3"
         style={{fontSize:"18px",color:"var(--sub11)",fontWeight:"bold"}}>
         部署別利用食数
      </div>
      <div className="BarChart"
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          width: '123vh',
          padding: '10px 20px',
          marginTop: '10px',
          backgroundColor: 'var(--sub10)',
          borderRadius: '10px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        }}>
      <div className="BarChart"
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
          width: '120vh',
          padding :'10px 5px 10px 5px' 
        }}>
        <Bar data={data} options={options} />
      </div>
      </div>
    </div>
  );
};

export default ChartBar