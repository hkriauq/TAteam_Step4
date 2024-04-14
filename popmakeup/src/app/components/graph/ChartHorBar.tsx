"use client";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const ChartHorBar = () => {

    const labels = ['〜29', '30〜39', '40〜49', '50〜59', '60〜'];
    const data = {
        labels: labels,
        datasets: [{
          //axis: 'y',
          //label: '',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(253, 164, 3, 0.8)',
            'rgba(232, 117, 26, 0.8)',
            'rgba(137, 129, 33, 0.8)',
            'rgba(229, 194, 135, 0.8)',
            'rgba(167, 146, 119, 0.8)',
          ],
          borderColor: [
            'rgba(253, 164, 3)',
            'rgba(232, 117, 26)',
            'rgba(137, 129, 33)',
            'rgba(229, 194, 135)',
            'rgba(167, 146, 119)',
          ],
          borderWidth: 1
        }]
      };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: 'y', 
        scales: {
            x: {
                grid: {
                  offset: false,
                }
            },
            y: {
                ticks: {
                    fontSize:14
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: 0
        },
        barThickness: 30
    };


    return (
        <div className="flex flex-col aline-center justify-center mb-5">
            <div className="title flex aline-center justify-center mb-3"
             style={{fontSize:"18px",color:"var(--sub11)",fontWeight:"bold"}}>
                年代別利用率
            </div>
            <div className="HorBarChart"
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40vh',
                    width: '40vh',
                    backgroundColor: 'var(--sub10)',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                }}>
                <div className="HorBarChart"
                    style={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '30vh',
                        width: '35vh',
                    }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default ChartHorBar