"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut = () => {
    const data = {
        labels: ['5回以上', '4回', '3回', '2回' , '1回' ],
        datasets: [{
            //label: 'My First Dataset',
            data: [300, 50, 100 , 50 , 20],
            backgroundColor: [
                'rgba(253, 164, 3, 0.8)',
                'rgba(232, 117, 26, 0.8)',
                'rgba(137, 129, 33, 0.8)',
                'rgba(229, 194, 135, 0.8)',
                'rgba(167, 146, 119, 0.8)',
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                align: 'start'
            }
        }

    };

    return (
        <div className="flex flex-col aline-center justify-center mb-5">
            <div className="title flex aline-center justify-center mb-3"
             style={{fontSize:"18px",color:"var(--sub11)",fontWeight:"bold"}}>
                一人当たりの利用回数/週
            </div>
            <div className="DoughnutChart"
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
                <div className="DoughnutChart flex flex-col"
                    style={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '32vh',
                        width: '35vh',
                        padding:'20px 0px 5px 0px',
                    }}>
                    <Doughnut data={data} options={options} />
                    <a style={{ fontSize: '16px', padding:'5px 0px 0px 0px'}}>週3回以上利用者　３５％</a>
                    <a style={{ fontSize: '16px', padding:'5px 0px 20px 0px'}}>前月比　＋２％</a>
                </div>
            </div>
        </div>
    );
};

export default ChartDoughnut;