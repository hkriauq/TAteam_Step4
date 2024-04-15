"use client";

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useAppContext } from "@/context/AppContext"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface YearMonth {
    year_month: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string; 
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

interface StoreData {
    store_id: number;
    store: string;
    total_meals: number;
    total_users: number;
}

const ChartBar : React.FC= () => {
    const { yearMonth, setStoreSummaries } = useAppContext();
    const [ chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: [{
            label: '現在までの累計',
            data: [],
            backgroundColor:[ 'rgba(232, 211, 202, 0.8)'],
            borderColor: ['rgb(189, 163, 147)'],
            borderWidth: 1
        }]
    });

    const stores = [
        {"store_id": 1, "store": "品川本社"},
        {"store_id": 2, "store": "札幌支社"},
        {"store_id": 3, "store": "静岡支社"},
        {"store_id": 4, "store": "名古屋支社"},
        {"store_id": 5, "store": "恵比寿支社"},
        {"store_id": 6, "store": "仙台支社"},
        {"store_id": 7, "store": "広島支社"},
        {"store_id": 8, "store": "福岡支社"},
        {"store_id": 9, "store": "浅草支社"},
    ];

    useEffect(() => {
        const fetchMonthData = async () => {
            console.log("Fetching data for yearMonth:", yearMonth.year_month); 
            try {
                const response = await axios.get(`http://localhost:8000/usage-group/${yearMonth.year_month}`);
                console.log("API response:", response.data);
                const storeData = response.data.store_data as StoreData[];
                setStoreSummaries(storeData); 

                setChartData({
                    labels: storeData.map(data => data.store),
                    datasets: [{
                        label: '単月累計',
                        data: storeData.map(data => data.total_meals),
                        backgroundColor: ['rgba(232, 211, 202, 0.9)'],
                        borderColor: ['rgb(189, 163, 147)'],
                        borderWidth: 1
                    }]
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMonthData();
    }, [yearMonth]); 
    

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
        <Bar data={chartData} options={options} />
      </div>
      </div>
    </div>
  );
};

export default ChartBar


// 全期間の年月を生成
//const generateMonths = () => {
    //let start = new Date(2021, 0); // 〜2021年1月
    //let end = new Date(); // 現在
    //let months = [];
    //while (start <= end) {
        //months.push(`${start.getFullYear()}${('0' + (start.getMonth() + 1)).slice(-2)}`);
        //start.setMonth(start.getMonth() + 1);
    //}
    //return months;
//};

// 全期間のtotal_meals累計をstore別に算出→グラフの値に入れる
//useEffect(() => {
    //const fetchAllData = async () => {
        //const months = generateMonths();
        //let allSummaries: StoreData[] = [];

        //for (const month of months) {
            //try {
                //const response = await axios.get(`http://localhost:8000/usage-group/${year_month}`);
                //const storeData = response.data.store_data as StoreData[];
                //storeData.forEach((data: StoreData) => {
                    //const existing = allSummaries.find(s => s.store_id === data.store_id);
                    //if (existing) {
                        //existing.total_meals += data.total_meals;
                        //existing.total_users += data.total_users;
                    //} else {
                        //allSummaries.push({ 
                            //store_id: data.store_id, 
                            //store: data.store,
                            //total_meals: data.total_meals,
                            //total_users: data.total_users
                        //});
                    //}
                //});
            //} catch (error) {
                //console.error('Error fetching data for month:', month, error);
            //}
        //}
        //setStoreSummaries(allSummaries);

        //setChartData({
            //labels: allSummaries.map(summary => {
                //const store = stores.find(s => s.store_id === summary.store_id);
                //return store ? store.store : `新規店舗 ${summary.store_id}`; 
            //}),
            //datasets: [{
                //label: '現在までの累計',
                //data: allSummaries.map(summary => summary.total_meals),
                //backgroundColor:[ 'rgba(232, 211, 202, 0.8)'],
                //borderColor: ['rgb(189, 163, 147)'],
                //borderWidth: 1
            //}]
        //});
    //};

    //fetchAllData();
//}, []);
