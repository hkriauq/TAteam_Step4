"use client";

import React, { useState, useEffect } from "react";
import { useAppContext } from "@/context/AppContext"; 


interface YearMonth {
    year_month: string;
}

const SelectYearMonth = () => {
    const { yearMonth , setYearMonth, setPrevYearMonth } = useAppContext();

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYearMonth = event.target.value;
        setYearMonth({ year_month: selectedYearMonth });

        // 選択された年月の年と月を取得
        const selectedYear = parseInt(selectedYearMonth.slice(0, 4));
        const selectedMonth = parseInt(selectedYearMonth.slice(4, 6));

        // 1ヶ月前の年月を計算
        let prevYear = selectedYear;
        let prevMonth = selectedMonth - 1;
        if (prevMonth < 1) {
            prevMonth = 12;
            prevYear -= 1;
        }

        // 1ヶ月前の年月を文字列に変換して設定
        const prevYearMonthStr = `${prevYear}${prevMonth.toString().padStart(2, '0')}`;
        setPrevYearMonth(prevYearMonthStr);
    };

    return (
        <div className="flex flex-col aline-center justify-center mb-3">
            <div className="title flex aline-center justify-center mb-3" >
                <select id="month-select" 
                    value={yearMonth.year_month}
                    onChange={handleMonthChange} 
                    style={{ 
                        fontSize: '18px', 
                        textAlign:'center',
                        paddingTop:'7px',
                        paddingBottom:'7px',
                        width:'40vh',
                        borderBottom: "2px solid var(--sub11)",
                        color:'var(--sub11)',
                        backgroundColor:'var(--sub10)'
                    }}>
                    <option value="202312">2023年12月</option>
                    <option value="202311">2023年11月</option>
                    <option value="202310">2023年10月</option>
                    <option value="202309">2023年9月</option>
                    <option value="202308">2023年8月</option>
                    <option value="202307">2023年7月</option>
                    <option value="202305">2023年5月</option>
                    <option value="202306">2023年6月</option>
                    <option value="202305">2023年5月</option>
                    <option value="202304">2023年4月</option>
                    <option value="202303">2023年3月</option>
                    <option value="202302">2023年2月</option>
                    <option value="202301">2023年1月</option>
                    <option value="202212">2022年12月</option>
                    <option value="202211">2022年11月</option>
                    <option value="202210">2022年10月</option>
                    <option value="202209">2022年9月</option>
                    <option value="202208">2022年8月</option>
                    <option value="202207">2022年7月</option>
                    <option value="202205">2022年5月</option>
                    <option value="202206">2022年6月</option>
                    <option value="202205">2022年5月</option>
                    <option value="202204">2022年4月</option>
                    <option value="202203">2022年3月</option>
                    <option value="202202">2022年2月</option>
                    <option value="202201">2022年1月</option>
                    {/*<option value="202112">2021年12月</option>
                    <option value="202111">2021年11月</option>
                    <option value="202110">2021年10月</option>
                    <option value="202109">2021年9月</option>
                    <option value="202108">2021年8月</option>
                    <option value="202107">2021年7月</option>
                    <option value="202105">2021年5月</option>
                    <option value="202106">2021年6月</option>
                    <option value="202105">2021年5月</option>
                    <option value="202104">2021年4月</option>
                    <option value="202103">2021年3月</option>
                    <option value="202102">2021年2月</option>
                    <option value="202101">2021年1月</option>*/}
                    {/* 追加 */}
                </select>
            </div>
        </div>
    );
};

export default SelectYearMonth

