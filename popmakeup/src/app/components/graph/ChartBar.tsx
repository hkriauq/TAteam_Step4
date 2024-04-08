"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBar = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      };


  const options = {
    maintainAspectRatio: false, // アスペクト比を維持しない
    responsive: true, // レスポンシブ
    elements: {
      line: {
        borderWidth: 3
      }
    }
  };

  return (
    <div className="flex flex-col aline-center justify-center mb-10 mb-40">
      <div className="title flex aline-center justify-center mt-5 mb-3"
         style={{fontSize:"18px",color:"var(--sub12)",fontWeight:"bold"}}>
         よくがんばった！学習の進捗
      </div>
      <div className="BarChart"
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '45vh',
          width: '70vh',
          padding: '10px 20px',
          marginTop: '10px',
          backgroundColor: 'var(--sub11)',
          borderRadius: '10px',
          border: '3px solid var(--sub3)', 
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        }}>

        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartBar